import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between">
          <div className="font-bold text-xl">My App</div>
          <div>
            <Link to="/" className="mr-4 hover:underline">
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Frontend Mentor
            </a>
            .
          </p>
          <p>
            Coded by{" "}
            <a
              href="https://github.com/ysmn-sl/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              ysmn
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
