import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '../context/ThemeProvider';

export const DarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
      />
      
    </div>
  );
};
