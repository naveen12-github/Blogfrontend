import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import nl1 from '../images/nl1.png';
import auth from '../config/firebase'; // Import your Firebase auth config
import { signOut } from 'firebase/auth';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user); // Update based on user's authentication status
    });
    return () => unsubscribe();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsAuthenticated(false);
        console.log('User logged out');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <div>
      <header className="bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-2">
            <img src={nl1} alt="Logo" className="h-10" />
            <h1 className="text-3xl font-extrabold text-white tracking-wide">
              <span className="text-yellow-300">My</span>Blog
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/home" className="text-white hover:text-yellow-300 transition duration-300">
              Home
            </Link>
            <Link to="/blog" className="text-white hover:text-yellow-300 transition duration-300">
              Blogs
            </Link>
            <Link to="/about" className="text-white hover:text-yellow-300 transition duration-300">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-yellow-300 transition duration-300">
              Contact
            </Link>
            {!isAuthenticated ? (
              <Link to="/login">
                <button className="bg-yellow-300 text-purple-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 transition duration-300">
                  Login
                </button>
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40">
            <div className="fixed top-0 left-0 h-full w-64 bg-purple-500 text-white p-6 z-50">
              <button onClick={toggleMobileMenu} className="text-white focus:outline-none mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Link to="/home" className="block py-2 hover:text-yellow-300">
                Home
              </Link>
              <Link to="/blog" className="block py-2 hover:text-yellow-300">
                Blogs
              </Link>
              <Link to="/about" className="block py-2 hover:text-yellow-300">
                About
              </Link>
              <Link to="/contact" className="block py-2 hover:text-yellow-300">
                Contact
              </Link>
              {!isAuthenticated ? (
                <Link to="/login">
                  <button className="w-full bg-yellow-300 text-purple-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 transition duration-300 mt-4">
                    Login
                  </button>
                </Link>
              ) : (
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 transition duration-300 mt-4"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;
