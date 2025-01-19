import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Calendar, Users, CheckSquare, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      toast.error('Failed to logout');
    }
  }

  function isActive(path) {
    return location.pathname === path;
  }

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Event Dashboard
              </h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/events"
                className={`inline-flex items-center px-4 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/events')
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Events
              </Link>
              <Link
                to="/attendees"
                className={`inline-flex items-center px-4 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/attendees')
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                <Users className="w-4 h-4 mr-2" />
                Attendees
              </Link>
              <Link
                to="/tasks"
                className={`inline-flex items-center px-4 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/tasks')
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                <CheckSquare className="w-4 h-4 mr-2" />
                Tasks
              </Link>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 my-3 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-all hover:scale-105"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}