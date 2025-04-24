import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 mb-16">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <div className="flex justify-around px-2 py-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex flex-col items-center p-2 rounded-lg ${isActive ? 'text-blue-600' : 'text-gray-500'}`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs mt-1">Profile</span>
          </NavLink>

          <NavLink
            to="/training"
            className={({ isActive }) =>
              `flex flex-col items-center p-2 rounded-lg ${isActive ? 'text-blue-600' : 'text-gray-500'}`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs mt-1">Training</span>
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `flex flex-col items-center p-2 rounded-lg ${isActive ? 'text-blue-600' : 'text-gray-500'}`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="text-xs mt-1">Menu</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Layout; 