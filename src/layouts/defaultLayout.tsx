import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { useTheme } from '../context/ThemeProvider'; // Hook para acessar o tema

import S from './defaultLayout.module.css';

export function DefaultLayout() {
    const { isDarkMode } = useTheme(); // Obtém o estado do tema

    return (
        <>
            <Header />
            <div className={`${S.default} ${isDarkMode ? 'dark-mode' : ''}`}>
                <Sidebar />
                <Outlet />
            </div>
        </>
    );
}
