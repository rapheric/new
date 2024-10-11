import { Route, Routes } from "react-router-dom";
import Loginpage from "./login";
import RegisterPage from "./register";
import ConfirmEmail from "./confirmEmail";
import RequestServiceProvider from "./requestServiceProvider";

function AuthNavigation() {
    return (
        <Routes>
            <Route path="/login" element={<Loginpage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/confirm-email" element={<ConfirmEmail />} />
            <Route path="/service-provider-request" element={<RequestServiceProvider />} />
        </Routes>

    );
}

export default AuthNavigation;