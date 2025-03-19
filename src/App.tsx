import { Routes, Route } from 'react-router-dom'; 

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard'; 
import { Account } from './pages/Account';     
import { Loan } from './pages/Loan'
import { Transfer } from './pages/Transfer'
import { Payment } from './pages/Payment'
import { Investment } from './pages/Investment'
import { Settings } from './pages/Settings';

import S from './App.module.css';

function App() {
  return (
    <div className={S.app}>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/tranfer" element={<Transfer />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
