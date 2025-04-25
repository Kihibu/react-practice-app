import { NavLink } from 'react-router-dom';

type Section = 'faq' | 'about' | 'settings' | 'balance';

const sections: { key: Section; label: string }[] = [
  { key: 'about', label: 'About the App' },
  { key: 'faq', label: 'FAQ' },
  { key: 'settings', label: 'Settings' },
  { key: 'balance', label: 'Balance' },
];

const MenuPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Menu</h1>
      <div className="flex flex-col space-y-2 w-full mb-4">
        {sections.map((section) => (
          <NavLink
            key={section.key}
            to={`/menu/${section.key}`}
            className={({ isActive }) =>
              `px-4 py-2 text-left rounded-r-lg ${isActive ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`
            }
            end
          >
            {section.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MenuPage; 