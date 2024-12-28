import React from 'react';
import BlogProfileImage from '../images/ak.JPG'; // Replace with the actual path to your image
import htmlLogo from '../images/kn1.png'; // Replace with the actual path to HTML logo
import cssLogo from '../images/kn2.png'; // Replace with the actual path to CSS logo
import jsLogo from '../images/kn3.png'; // Replace with the actual path to JavaScript logo
import reactLogo from '../images/kn4.png'; // Replace with the actual path to React logo
import nodeLogo from '../images/kn5.png'; // Replace with the actual path to Node.js logo
import mongoLogo from '../images/kn6.png'; // Replace with the actual path to MongoDB logo
import tailwindLogo from '../images/kn7.png'; // Replace with the actual path to Tailwind CSS logo
import gitLogo from '../images/kn8.png'; // Replace with the actual path to Git logo
import premiereLogo from '../images/kn9.png'; // Replace with the actual path to Adobe Premiere Pro logo
import cd1 from '../images/cd1.png';
import cd2 from '../images/cd2.png';
import cd3 from '../images/cd3.png';
import cd4 from '../images/cd4.png';

function Home() {
    const skills = [
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'JavaScript', logo: jsLogo },
        { name: 'React', logo: reactLogo },
        { name: 'Node.js', logo: nodeLogo },
        { name: 'MongoDB', logo: mongoLogo },
        { name: 'Tailwind CSS', logo: tailwindLogo },
        { name: 'Git/GitHub', logo: gitLogo },
        { name: 'Adobe Premiere Pro', logo: premiereLogo },
    ];

    return (
        <div className="min-h-screen px-4 py-8">
            {/* Profile Section */}
            <div className="flex items-center justify-center">
                <div className="w-full sm:w-1/2 text-center sm:text-left">
                    <h2 className="text-3xl md:text-6xl font-bold pb-2 animate-fade-in">
                        Hi! I Am
                    </h2>
                    <h2 className="text-4xl md:text-7xl font-bold text-orange-400 py-2 animate-reveal">
                        A.Naveen
                    </h2>
                    <p className="py-4 text-lg sm:text-xl animate-fade-in-up">
                        I am a passionate Full Stack Developer specializing in building responsive and interactive web applications.
                        With expertise in React, JavaScript, and Tailwind CSS, I bring creative ideas to life.
                        Let's collaborate to create impactful solutions for your business needs.
                    </p>
                    <div className="flex gap-6 mt-4 justify-center sm:justify-start">
                        <button className="bg-orange-400 text-white py-2 px-6 rounded-lg font-semibold transition duration-300 hover:bg-orange-500">
                            Hire Me
                        </button>
                        <a
                            href="/resume.pdf"
                            download="A.Naveen_Resume.pdf"
                            className="bg-transparent border-2 border-orange-400 text-orange-400 py-2 px-6 rounded-lg font-semibold transition duration-300 hover:bg-orange-400 hover:text-white"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="sm:block hidden ml-8">
                    <div className="relative">
                        <img
                            src={BlogProfileImage}
                            alt="Blog Profile"
                            className="w-50 h-50 sm:w-80 sm:h-85 mx-auto rounded-full shadow-xl object-cover"
                        />
                        <div className="absolute inset-0 rounded-full border-4 border-transparent animate-glow-neon"></div>
                    </div>
                </div>
            </div>
            {/* Skills Section */}
            <div className="w-full bg-gradient-to-r from-[#4e73df] to-[#224abe] py-12 overflow-hidden my-4 rounded-sm">
                <h3 className="text-3xl font-bold text-center mb-8 text-white"><span className=' text-orange-400'>My</span> Skills</h3>
                <div className="relative">
                    {/* Scrolling Container */}
                    <div className="flex gap-8 animate-slide space-x-8">
                        {skills.concat(skills).map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center min-w-[100px] sm:min-w-[120px] transform transition-transform duration-300 hover:scale-110"
                            >
                                <img
                                    src={skill.logo}
                                    alt={`${skill.name} logo`}
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg hover:shadow-xl"
                                />
                                <h4 className="mt-2 text-sm sm:text-base font-semibold text-white">{skill.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full bg-gradient-to-r from-[#4e73df] to-[#224abe] py-16">
    <div className="container mx-auto px-4 text-center">
        <h3 className="text-4xl font-semibold text-white mb-6 animate-fade-in">
            About Me
        </h3>
        <p className="text-lg sm:text-xl font-light text-gray-200 mb-8">
            Hi, I'm A. Naveen, a passionate Full Stack Developer. I specialize in creating responsive and user-friendly web applications using technologies like React, Node.js, MongoDB, JavaScript, and Tailwind CSS. My journey started with a curiosity to understand how things work, and over time, it evolved into a love for problem-solving and building digital experiences.
        </p>

        <p className="text-lg sm:text-xl font-light text-gray-200 mb-8">
            I believe in the power of clean, maintainable code and continuously strive to improve my skills through personal projects and collaboration with others. I am always eager to learn, adapt, and grow in the fast-evolving tech landscape.
        </p>

        <p className="text-lg sm:text-xl font-light text-gray-200 mb-8 max-w-2xl mx-auto">
            My goal is to build impactful, well-structured applications that help solve real-world problems while providing seamless user experiences. I am open to new challenges and opportunities to further enhance my knowledge and skills.
        </p>

        {/* Call-to-Action */}
        <div className="mt-8">
            <button className="bg-orange-400 text-white py-2 px-6 rounded-lg font-semibold transition duration-300 hover:bg-orange-500">
                Get In Touch
            </button>
        </div>
    </div>
</div>


            <div className="w-full bg-gradient-to-r from-[#b8e1d4] to-whit py-16">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-4xl font-semibold text-gray-800 mb-6 animate-fade-in">
                        Checkout My Live Projects
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Project Card 1 - Nostra E-commerce Website */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300">
                            <img
                                src={cd1} // Replace with actual image of the Nostra project
                                alt="Nostra E-commerce Website"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Nostra E-commerce Website</h4>
                                <p className="text-gray-600 mb-4">
                                    Nostra is a fully functional e-commerce platform built with React.js, Node.js, MongoDB, and Stripe. 
                                    It offers a smooth user experience for browsing products, adding to cart, and securely processing payments.
                                </p>
                                <a
                                    href="https://www.linkedin.com/posts/a-naveen-b1ab62274_webdevelopment-ecommerce-javascript-activity-7258664973613047809-2XEx?utm_source=share&utm_medium=member_desktop" // Replace with actual LinkedIn post link for Nostra project
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-400 hover:text-orange-500 font-semibold"
                                >
                                    View on LinkedIn
                                </a>
                            </div>
                        </div>

                        {/* Project Card 2 - BulkMail */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300">
                            <img
                                src={cd2} // Replace with actual image of the BulkMail project
                                alt="BulkMail"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">BulkMail - Bulk Email App</h4>
                                <p className="text-gray-600 mb-4">
                                    BulkMail is a web application for sending bulk emails to multiple recipients. Built with React, Node.js, 
                                    and MongoDB, it offers an easy interface for email campaigns, personalized emails, and CSV uploads.
                                </p>
                                <a
                                    href="https://www.linkedin.com/posts/a-naveen-b1ab62274_fullstackdevelopment-bulkmail-webapp-activity-7275893980850991105-6Ipz?utm_source=share&utm_medium=member_desktop" // Replace with actual LinkedIn post link for BulkMail project
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-400 hover:text-orange-500 font-semibold"
                                >
                                    View on LinkedIn
                                </a>
                            </div>
                        </div>

                        {/* Project Card 3 - Udemy Clone */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300">
                            <img
                                src={cd3}
                                alt="Udemy Clone"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Udemy Clone</h4>
                                <p className="text-gray-600 mb-4">
                                    The Udemy Clone is a learning platform replica built with React.js, featuring courses, quizzes, and user authentication.
                                    It demonstrates my ability to develop scalable applications with a rich user experience.
                                </p>
                                <a
                                    href="https://www.linkedin.com/posts/a-naveen-b1ab62274_project-spotlight-udemy-clone-with-html-activity-7261182659232440321-QSYJ?utm_source=share&utm_medium=member_desktop" // Replace with actual LinkedIn post link for Udemy Clone project
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-400 hover:text-orange-500 font-semibold"
                                >
                                    View on LinkedIn
                                </a>
                            </div>
                        </div>

                        {/* Project Card 4 - Actodo */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition duration-300">
                            <img
                                src={cd4}
                                alt="Actodo"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Actodo - Task Management App</h4>
                                <p className="text-gray-600 mb-4">
                                    Actodo is a task management web app built with React, Node.js, and MongoDB. It allows users to create and manage tasks, 
                                    with real-time updates and synchronization for collaborative teams.
                                </p>
                                <a
                                    href="https://www.linkedin.com/posts/a-naveen-b1ab62274_actodo-a-to-do-app-using-reactjs-im-activity-7266450920937316352-bz_L?utm_source=share&utm_medium=member_desktop" // Replace with actual LinkedIn post link for Actodo project
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-400 hover:text-orange-500 font-semibold"
                                >
                                    View on LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
