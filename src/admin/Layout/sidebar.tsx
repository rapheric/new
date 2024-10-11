
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Users', path: '/users' },
    { name: 'Services', path: '/services' },
    { name: 'Settings', path: '/settings' },
    { name: 'Microservices', path: '/microservices' },
    { name: 'Products', path: '/products' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'E-commerce', path: '/ecommerce' },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-5">
        <h1 className="text-lg font-bold">Admin Dashboard</h1>
      </div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="p-4 hover:bg-gray-700">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
