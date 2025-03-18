import S from './styles/Header.module.css'
import { HeaderPages } from './HeaderPages'

export const Header = () => {
  return(
    <header>
      <div className={S.logo}>
        <img src="./src/assets/logo.png" alt="logo" />
        <h2>ByteBank</h2>
      </div>
      <HeaderPages 
        PageIcon=''
        PageName='Opa'
      />
    </header>
  )
} 