import { Link } from 'react-router-dom'
import S from './styles/Header.module.css'

import { FaSignInAlt  } from 'react-icons/fa'

export const Header = () => {
  return(
    <header className={S.header}>
      <div className={S.logo}>
        <img src="./src/assets/logo.png" alt="logo" />
        <h2>BYTEBANK</h2>
      </div>
      
      <Link to="/login" className={`${S.sidebarPage}`}>
        <button className={S.login}>
          <FaSignInAlt  />
          <p>Login</p>
        </button>
      </Link>
      
      
    </header>
  )
} 