
import ServicesPage from "../services/servicePage";
import UsersPage from "../Users/usersPage";
import DevOnProgress from "../workOnProgress/devOnprogress";

interface ContentProps {
  activeItem: string;
}

const UserContent: React.FC<ContentProps> = ({ activeItem }) => {
  const renderContent = () => {
    switch (activeItem) {
      case 'Dashboard':
        return <div>Dashboard</div>
      case 'Users':
        return <UsersPage/>;
      case 'Services':
        return <ServicesPage/>;
      case 'Settings':
        return <DevOnProgress/>;
      case 'Microservices':
        return <DevOnProgress/>;
      case 'Products':
        return <ServicesPage/>;
      case 'Microservices':
        return <DevOnProgress/>;
      case 'E-commerce':
        return <DevOnProgress/>;
        case 'Analytics':
            return <DevOnProgress/>;
      default:
        return <div>Select an item from the sidebar</div>;
    }
  };

  return <main className="flex-1 p-6">{renderContent()}</main>;
};

export default UserContent;
