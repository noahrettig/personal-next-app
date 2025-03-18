import Sidebar from "../components/Sidebar";
import RootLayout from "../layout";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
            {children}
        </main>
    </div>
  );
}