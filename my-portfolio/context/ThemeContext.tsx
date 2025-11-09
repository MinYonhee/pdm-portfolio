import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { useColorScheme, ColorSchemeName } from 'react-native';

const BASE_COLORS = {
  DUSTY_PURPLE: '#8E44AD',
  SHEER_LILAC: '#C8A2C8',
  YELLOW_SKILL: '#FFD700', 
  RED_SKILL: '#DC143C',
  BLUE_SKILL: '#1E90FF',
};

const LIGHT_MODE_COLORS = {
  background: '#F5F5F7',
  text: '#301934',         
  cardBackground: '#FFFFFF',
  line: '#E0E0E0',
  icon: '#8E44AD',
  tabBar: '#FFFFFF',
  tabInactive: '#A0A0A0',
  textButton: '#F0F0F0'
};

const DARK_MODE_COLORS = {
  background: '#121212',
  text: '#F0F0F0',
  cardBackground: '#1E1E1E',
  line: '#333333',
  icon: '#C8A2C8',
  textButton: '#F0F0F0',
  tabBar: '#1E1E1E',
  tabInactive: '#888888',
};

interface ThemeContextProps {
  theme: ColorSchemeName;
  colors: {
    background: string;
    text: string;
    cardBackground: string;
    line: string;
    icon: string;
    tabBar: string;
    tabInactive: string;
    DUSTY_PURPLE: string;
    SHEER_LILAC: string;
    YELLOW_SKILL: string; 
    RED_SKILL: string;
    BLUE_SKILL: string;
  };
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<ColorSchemeName>(colorScheme);

  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const themeColors = theme === 'light' ? LIGHT_MODE_COLORS : DARK_MODE_COLORS;

  const contextValue = useMemo(() => ({
    theme,
    colors: {
      ...themeColors,
      ...BASE_COLORS,
    },
    toggleTheme,
  }), [theme, themeColors]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
