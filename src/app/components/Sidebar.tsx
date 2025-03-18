"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
    const [isFolder1Open, setIsFolder1Open] = useState(false);
    const [isFolder2Open, setIsFolder2Open] = useState(false);

    return (
        <aside className="w-64 bg-gray-100 p-4 overflow-y-auto h-[calc(100vh-4rem)]">
            <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
            <ul>
                <li className="flex justify-between items-center">
                    <span className="p-2">Folder 1</span>
                    <button
                        onClick={() => setIsFolder1Open(!isFolder1Open)}
                        className="p-2 hover:bg-gray-200"
                    >
                        {isFolder1Open ? '-' : '+'}
                    </button>
                </li>
                {isFolder1Open && (
                    <ul className="pl-4">
                        <li>
                            <Link href="#" className="block p-2 hover:bg-gray-200">file1.mp4</Link>
                        </li>
                        <li>
                            <Link href="#" className="block p-2 hover:bg-gray-200">file2.mp4</Link>
                        </li>
                    </ul>
                )}
                <li className="flex justify-between items-center">
                    <span className="p-2">Folder 2</span>
                    <button
                        onClick={() => setIsFolder2Open(!isFolder2Open)}
                        className="p-2 hover:bg-gray-200"
                    >
                        {isFolder2Open ? '-' : '+'}
                    </button>
                </li>
                {isFolder2Open && (
                    <ul className="pl-4">
                        <li>
                            <Link href="#" className="block p-2 hover:bg-gray-200">file3.mp4</Link>
                        </li>
                        <li>
                            <Link href="#" className="block p-2 hover:bg-gray-200">file4.mp4</Link>
                        </li>
                    </ul>
                )}
            </ul>
        </aside>
    );
}

