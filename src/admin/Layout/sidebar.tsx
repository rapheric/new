

interface SidebarProps {
  setActiveItem: (item: string) => void;
}

const AdminSidebar:React.FC<SidebarProps> = ({setActiveItem}) => {


  const menuItems = [
    { name: 'Dashboard'},
    { name: 'Users' },
    { name: 'Services' },
    { name: 'Settings',  },
    { name: 'Microservices',  },
    { name: 'Products' },
    { name: 'Analytics' },
    { name: 'E-commerce' },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-5">
        <h1 className="text-lg font-bold">DLMP</h1>
      </div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}  onClick={() => setActiveItem(item.name)} className="p-4 hover:bg-gray-700" >
             {item.name} 
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
