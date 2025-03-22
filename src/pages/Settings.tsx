import S from './styles/Settings.module.css'
import { DarkMode } from '../components/DarkMode';

export const Settings = () => {
  return (
    <div>
      <h1 className={S.title}>Settings</h1>
      <div className={S.main}>
        <div className={S.option}>
          <p className={S.text}>Screen mode:</p>
          <DarkMode />
        </div>

      </div>
    </div>
  )
}