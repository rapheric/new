
import WorkOnProgress from "../../pages/workOnProgress/workOnProgress";
import ServicesPage from "../services/servicePage";
import UsersPage from "../Users/usersPage";

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
        return <WorkOnProgress/>;
      case 'Microservices':
        return <WorkOnProgress/>;
      case 'Products':
        return <WorkOnProgress/>;
      case 'Microservices':
        return <WorkOnProgress/>;
      case 'E-commerce':
        return <WorkOnProgress/>;
        case 'Analytics':
            return <WorkOnProgress/>;
      default:
        return <div>Select an item from the sidebar</div>;
    }
  };

  return <main className="flex-1 p-6">{renderContent()}</main>;
};

export default UserContent;
