"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
    const [isFolder1Open, setIsFolder1Open] = useState(false);
    const [isFolder2Open, setIsFolder2Open] = useState(false);

    return (
        <aside className="w-64 h-screen bg-gray-100 p-4">
            <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
            <ul>
                <li>
                    <button
                        onClick={() => setIsFolder1Open(!isFolder1Open)}
                        className="w-full text-left p-2 hover:bg-gray-200"
                    >
                        Folder 1
                    </button>
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
                </li>
                <li>
                    <button
                        onClick={() => setIsFolder2Open(!isFolder2Open)}
                        className="w-full text-left p-2 hover:bg-gray-200"
                    >
                        Folder 2
                    </button>
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
                </li>
            </ul>
        </aside>
    );
}

