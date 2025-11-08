// ThemeContext.tsx
import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { useColorScheme, ColorSchemeName } from 'react-native';

// --- 1. Definições de Cores ---
// Definimos as cores fixas e as cores que MUDAM com o tema
const BASE_COLORS = {
  // Cores que NUNCA mudam (ex: roxo principal)
  DUSTY_PURPLE: '#8E44AD',
  SHEER_LILAC: '#C8A2C8',
  YELLOW_SKILL: '#FFD700', // Adicionado para cores de skill fixas
  RED_SKILL: '#DC143C',
  BLUE_SKILL: '#1E90FF',
};

const LIGHT_MODE_COLORS = {
  // Cores do Modo CLARO
  background: '#F5F5F7',
  text: '#301934',         // darkBlackberry
  cardBackground: '#FFFFFF',
  line: '#E0E0E0',
  icon: '#8E44AD',
  tabBar: '#FFFFFF',
  tabInactive: '#A0A0A0',
};

const DARK_MODE_COLORS = {
  // Cores do Modo ESCURO
  background: '#121212',
  text: '#F0F0F0',
  cardBackground: '#1E1E1E',
  line: '#333333',
  icon: '#C8A2C8',
  tabBar: '#1E1E1E',
  tabInactive: '#888888',
};

// --- 2. Interface do Contexto ---
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
    // Cores base (fixas)
    DUSTY_PURPLE: string;
    SHEER_LILAC: string;
    YELLOW_SKILL: string; 
    RED_SKILL: string;
    BLUE_SKILL: string;
  };
  toggleTheme: () => void;
}

// Cria o Contexto com valores padrão
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Hook personalizado para consumir o tema facilmente em qualquer componente
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
};

// --- 3. Provedor de Tema ---
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Obtém a preferência do sistema (light/dark)
  const colorScheme = useColorScheme();
  // Estado do tema, inicializado com a preferência do sistema
  const [theme, setTheme] = useState<ColorSchemeName>(colorScheme);

  // Se a preferência do sistema mudar, atualiza o tema
  useEffect(() => {
    // Isso garante que se o usuário mudar o tema do sistema, o app acompanhe,
    // a menos que o usuário use o toggleTheme (que não está implementado aqui mas é a intenção).
    setTheme(colorScheme);
  }, [colorScheme]);

  // Função para alternar entre light e dark
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  // Memoiza (armazena) os objetos de cores para evitar recriações desnecessárias
  const themeColors = theme === 'light' ? LIGHT_MODE_COLORS : DARK_MODE_COLORS;

  const contextValue = useMemo(() => ({
    theme,
    colors: {
      ...themeColors,
      ...BASE_COLORS, // Adiciona as cores fixas
    },
    toggleTheme,
  }), [theme, themeColors]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};