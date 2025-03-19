import S from './styles/Header.module.css'

import { HeaderPage } from './HeaderPage'

import { FaTachometerAlt, FaWallet, FaExchangeAlt, FaCreditCard, FaChartLine, FaHandHoldingUsd, FaCog } from 'react-icons/fa';

export const Header = () => {
  return(
    <header>
      <div className={S.logo}>
        <img src="./src/assets/logo.png" alt="logo" />
        <h2>ByteBank</h2>
      </div>
      
      <div className={S.pages}>
        <HeaderPage
          PageIcon={<FaTachometerAlt />} 
          PageName='Dashboard'
        />
        <HeaderPage 
          PageIcon={<FaWallet  />} 
          PageName='Accounts'
        />

        <HeaderPage 
          PageIcon={<FaExchangeAlt />} 
          PageName='Transfer'
        />

        <HeaderPage 
          PageIcon={<FaCreditCard  />} 
          PageName='Payments'
        />

        <HeaderPage 
          PageIcon={<FaChartLine  />} 
          PageName='Investments'
        />

        <HeaderPage 
          PageIcon={<FaHandHoldingUsd  />}
          PageName='Loan'
        />
      </div>
      

      <HeaderPage 
        PageIcon={<FaCog />}
        PageName='Settings'
      />

        
    </header>
  )
} 