// WelcomeComponent.jsx
import React from 'react';
import './WelcomeComponent.css'; // Importiere die CSS-Datei

const WelcomeComponent = () => {
  return (
    <div className="relative flex items-center justify-center h-screen animated-gradient py-000">
      <div className="text-center text-white p-6 bg-black bg-opacity-40 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold mb-4 animate-pulse">
          Welcome to My DDEV Vue Setup
        </h1>
        <p className="text-xl mb-8">
          Kickstart your Vue development with ease and flexibility
        </p>
        <a
          href="https://robingropp.de"
          rel="noopener noreferrer"
          target="_blank"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default WelcomeComponent;
