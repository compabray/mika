import React from 'react';

function Home() {
    return (
        <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to my website!</h1>
            <p className="text-lg mb-8">Thanks for visiting.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn More
            </button>
        </div>
    );
}

export default Home;
