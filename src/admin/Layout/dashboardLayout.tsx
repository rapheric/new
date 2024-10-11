
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './sidebar';
// import Navbar from './navbar';

import AdminSidebar from './sidebar';
import AdminNavbar from './navbar';

const DashLayout = () => {
  return (
    
      <div className="flex">
        <AdminSidebar />
        <div className="flex flex-col flex-1">
          <AdminNavbar />
          {/* <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes> */}
        </div>
      </div>

  );
};

export default DashLayout;
