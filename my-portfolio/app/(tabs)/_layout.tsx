import { Tabs } from 'expo-router';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { useTheme } from '../../context/ThemeContext';

export default function TabLayout() {
  const { colors, theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.DUSTY_PURPLE,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarStyle: {
          backgroundColor: colors.tabBar,
          borderTopColor: colors.line,
        },
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          color: colors.text,
        },
      }}
    >
      <Tabs.Screen
        name="index/index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="sobre/index"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
      <Tabs.Screen
        name="academico/index"
        options={{
          title: 'Formação',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="graduation-cap" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profissional/index"
        options={{
          title: 'Carreira',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="suitcase" color={color} />,
        }}
      />
      <Tabs.Screen
        name="projetos/index"
        options={{
          title: 'Projetos',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="briefcase" color={color} />,
        }}
      />
      {/* Nova aba de Contato */}
      <Tabs.Screen
        name="contato/index"
        options={{
          title: 'Contato',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="comments" color={color} />,
        }}
      />
    </Tabs>
  );
}