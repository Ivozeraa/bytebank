import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/defaultLayout";

import { Dashboard } from "./pages/Dashboard";
import { Account } from "./pages/Account";
import { Loan } from "./pages/Loan";
import { Transfer } from "./pages/Transfer";
import { Payment } from "./pages/Payment";
import { Investment } from "./pages/Investment";
import { Login } from "./pages/login/login";
import { Settings } from "./pages/Settings";

import S from "./App.module.css";
import { Register } from "./pages/register/register";

function App() {
  return (
    <>
      <div className={S.app}>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/loan" element={<Loan />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register  />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
