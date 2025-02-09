import { Link, Outlet } from 'react-router-dom';
import { UserCircle, Home, FileText, Search, Bell } from 'lucide-react';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">JobMatch</Link>
            <div className="flex items-center space-x-4">
              <Link to="/notifications" className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="w-6 h-6" />
              </Link>
              <Link to="/profile" className="p-2 hover:bg-gray-100 rounded-full">
                <UserCircle className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="fixed bottom-0 w-full bg-white border-t md:hidden">
        <div className="flex justify-around py-3">
          <Link to="/" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </Link>
          <Link to="/search" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
            <Search className="w-6 h-6" />
            <span className="text-xs">Search</span>
          </Link>
          <Link to="/cv" className="flex flex-col items-center text-gray-600 hover:text-blue-600">
            <FileText className="w-6 h-6" />
            <span className="text-xs">CV</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MainLayout;