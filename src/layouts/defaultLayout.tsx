import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

import S from './defaultLayout.module.css'

export function DefaultLayout() {
    return (
        <>
            <Header />
            <div className={S.default}>
                <Sidebar />
                <Outlet />
            </div>

        </>
    )
}