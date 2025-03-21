import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FaTachometerAlt, FaWallet, FaExchangeAlt, FaCreditCard, FaChartLine, FaHandHoldingUsd, FaCog, FaSignOutAlt } from 'react-icons/fa';

import S from './styles/Sidebar.module.css';

export const Sidebar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    setIsLogged(false);
  };

  const getLinkClass = (path: string) => {
    return location.pathname === path ? S.active : '';
  };

  return (
    <aside className={S.sidebar}>
      <div className={S.mainSidebar}>
        <Link to="/dashboard" className={`${S.sidebarPage} ${getLinkClass('/dashboard')}`}>
          <div className={S.icon}><FaTachometerAlt /></div>
          <p className={S.pageName}>Dashboard</p>
        </Link>

        <Link to="/account" className={`${S.sidebarPage} ${getLinkClass('/account')}`}>
          <div className={S.icon}><FaWallet /></div>
          <p className={S.pageName}>Account</p>
        </Link>

        <Link to="/transfer" className={`${S.sidebarPage} ${getLinkClass('/transfer')}`}>
          <div className={S.icon}><FaExchangeAlt /></div>
          <p className={S.pageName}>Transfer</p>
        </Link>

        <Link to="/payment" className={`${S.sidebarPage} ${getLinkClass('/payment')}`}>
          <div className={S.icon}><FaCreditCard /></div>
          <p className={S.pageName}>Payment</p>
        </Link>

        <Link to="/investment" className={`${S.sidebarPage} ${getLinkClass('/investment')}`}>
          <div className={S.icon}><FaChartLine /></div>
          <p className={S.pageName}>Investment</p>
        </Link>

        <Link to="/loan" className={`${S.sidebarPage} ${getLinkClass('/loan')}`}>
          <div className={S.icon}><FaHandHoldingUsd /></div>
          <p className={S.pageName}>Loan</p>
        </Link>
      </div>

      <Link to="/settings" className={`${S.sidebarPage} ${getLinkClass('/settings')}`}>
        <div className={S.icon}><FaCog /></div>
        <p className={S.pageName}>Settings</p>
      </Link>

      {isLogged && (
        <Link to="/" onClick={handleLogout} className={`${S.sidebarPage} ${getLinkClass('/logout')}`}>
          <div className={S.icon}><FaSignOutAlt /></div>
          <p className={S.pageName}>Logout</p>
        </Link>
      )}
    </aside>
  );
};