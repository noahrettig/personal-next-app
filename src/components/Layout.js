'use client';

// components/Layout.js
import { useState } from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
    setIsOpen(!isOpen);
    };

    return (
    <div className="flex h-screen">
        <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
        <div className="flex-1 flex flex-col overflow-hidden">
            <button
            className="md:hidden p-4 text-gray-600 hover:text-gray-800"
            onClick={toggleSidebar}
        >
            Menu
        </button>
        <main className="flex-1 p-4">{children}</main>
        </div>
    </div>
    );
};

export default Layout;