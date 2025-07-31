
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-[#0C2340] text-white p-8 text-center" style={{ borderBottom: '10px solid #FDE047' }}>
             <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-xs text-gray-500 font-sans">
                Logo
             </div>
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-300">Good Summer Vibes</h1>
            <p className="mt-2 text-2xl text-white">Staff & Family Survey Results</p>
        </header>
    );
};

export default Header;
