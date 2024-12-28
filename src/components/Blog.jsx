import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import auth from '../config/firebase';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [admin, setAdmin] = useState([false]);

    useEffect(() => {
        window.scrollTo(0, 0);

        auth.onAuthStateChanged((user) => {
            if (user) {
                if (user.uid === 'lSxBuQkYlCdNkhQQNvftyTzFqIv2') {
                    console.log("He is Admin");
                    setAdmin(true);
                } else {
                    console.log("Not an Admin");
                    setAdmin(false);
                }
            } else {
                console.log("User logged Out");
            }
        });

        // Use deployed backend URL
        axios.get("https://blogbackends.onrender.com/api/blogs").then((res) => {
            console.log(res.data);
            setBlogs(res.data);
        }).catch(() => {
            console.log("Error fetching data");
        });
    }, []);

    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    const handleLike = async (blog_id) => {
        try {
            const response = await axios.patch(`https://blogbackends.onrender.com/api/blogs/like/${blog_id}`);
            if (response.status === 200) {
                axios.get("https://blogbackends.onrender.com/api/blogs").then((res) => {
                    console.log(res.data);
                    setBlogs(res.data);
                }).catch(() => {
                    console.log("Error fetching data");
                });
            }
        } catch (error) {
            console.error('Error liking the blog post:', error);
        }
    };

    const handleNewBlogSubmit = (event) => {
        event.preventDefault();
        const today = new Date();
        const date = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

        const likes = 0;
        axios.post("https://blogbackends.onrender.com/api/blogs", { newTitle, date, newContent, likes }).then((res) => {
            console.log(res.data);

            axios.get("https://blogbackends.onrender.com/api/blogs").then((res) => {
                console.log(res.data);
                setBlogs(res.data);
            }).catch(() => {
                console.log("Error fetching data");
            });
        });

        setNewTitle('');
        setNewContent('');
    };

    return (
        <div className="blog-section py-14">
            <h2 className="text-center text-5xl font-bold mb-14">Latest <span className='text-orange-400'>Blogs</span> 📚</h2>

            {/* Blog creation form */}
            {admin ? (
                <div className="blog-creation-form mb-8" style={{ width: "80%", margin: "auto" }}>
                    <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Blog Title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="p-2 border rounded"
                            required
                        />
                        <textarea
                            placeholder="Blog Content"
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                            className="p-2 border rounded"
                            rows="4"
                            required
                        />
                        <button type="submit" className="bg-orange-400 text-white p-2 rounded hover:bg-orange-600">
                            Add Blog
                        </button>
                    </form>
                </div>
            ) : ""}

            <div className="blogs-container grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
                {blogs.map((blog) => (
                    <div key={blog._id} className="blog-post mb-8 p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="blog-title font-semibold text-2xl text-gray-800 mb-3">{blog.newTitle}</h3>
                        <p className="blog-date text-gray-400 text-sm mb-4">{blog.date}</p>
                        <p className="blog-content text-gray-600 mb-4">{blog.newContent}</p>
                        <span className="text-blue-500 cursor-pointer" onClick={() => handleLike(blog._id)}>Like</span>
                        <span className="ml-2">{blog.likes} Likes</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blogs;
