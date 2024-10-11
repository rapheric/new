import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/landing';
import WorkOnProgress from './pages/workOnProgress/workOnProgress';
import AuthNavigation from './global/auth/navigation';
import MarketPlace from './pages/marketplace/marketPlace';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DashLayout from './admin/Layout/dashboardLayout';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/workOnProgress" element={<WorkOnProgress />} />
          <Route path="/auth/*" element={<AuthNavigation />} />
          <Route path="/marketPlace" element={<MarketPlace/>} />
          <Route path="/dashboardLayout" element={<DashLayout/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
