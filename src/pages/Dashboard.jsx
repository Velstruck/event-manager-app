import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 min-h-[calc(100vh-12rem)]">
          <Outlet />
        </div>
      </div>
      <footer className="bg-white shadow-lg mt-auto">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Event Management Dashboard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}