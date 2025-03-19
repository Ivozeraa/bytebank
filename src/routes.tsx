import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import {Login} from "./pages/login/Login"; // Verifique se o caminho está correto

// const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
//   const isAuthenticated = !!localStorage.getItem("token");
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
