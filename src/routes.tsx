import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/login";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Register } from "./pages/register/register";

// const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
//   const isAuthenticated = !!localStorage.getItem("token");
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
