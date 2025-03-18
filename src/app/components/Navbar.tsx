export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="text-xl font-bold">My Application</div>
            <div className="flex space-x-4">
                <a href="/" className="hover:underline">Home</a>
                <a href="/dashboard" className="hover:underline">Dashboard</a>
                <a href="#" className="hover:underline">Contact</a>
            </div>
        </nav>
    );
}