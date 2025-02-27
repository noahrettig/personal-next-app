// components/Sidebar.js
import Link from 'next/link';

const Sidebar = () => {
    return (
    <aside className="w-64 bg-gray-100 p-4">
        <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
        <ul>
        <li>
            <Link href="/" className="block p-2 hover:bg-gray-200">Home</Link>
        </li>
        <li>
            <Link href="/about" className="block p-2 hover:bg-gray-200">About</Link>
        </li>
        <li>
            <Link href="/services" className="block p-2 hover:bg-gray-200">Services</Link>
        </li>
        <li>
            <Link href="/contact" className="block p-2 hover:bg-gray-200">Contact</Link>
        </li>
        </ul>
    </aside>
    );
};

export default Sidebar;