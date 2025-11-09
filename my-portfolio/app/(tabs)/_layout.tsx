import { Tabs } from 'expo-router';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { useTheme } from '../../context/ThemeContext';

export default function TabLayout() {
  const { colors, theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.DUSTY_PURPLE,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarStyle: {
          backgroundColor: colors.tabBar,
          borderTopColor: colors.line,
        },
      }}
    >
      <Tabs.Screen
        name="home" 
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="sobre" 
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
      <Tabs.Screen
        name="academico" 
        options={{
          title: 'Formação',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="graduation-cap" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profissional" 
        options={{
          title: 'Carreira',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="suitcase" color={color} />,
        }}
      />
      <Tabs.Screen
        name="projetos" 
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="briefcase" color={color} />,
        }}
      />
      <Tabs.Screen
        name="contato" 
        options={{
          title: 'Contato',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="comments" color={color} />,
        }}
      />
    </Tabs>
  );
}