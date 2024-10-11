
import AdminSidebar from './sidebar';
import AdminNavbar from './navbar';
import { useState } from 'react';
import UserContent from './content';



const DashLayout = () => {

    const [activeItem, setActiveItem] = useState('Dashboard');
    return (

        <div className="flex">
            <AdminSidebar setActiveItem={setActiveItem} />
            <div className="flex flex-col flex-1">
                <AdminNavbar />
                <UserContent activeItem={activeItem} />
            </div>
        </div>

    );
};

export default DashLayout;
