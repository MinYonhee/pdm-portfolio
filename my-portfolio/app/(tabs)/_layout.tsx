import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
// Você pode precisar instalar: npx expo install @expo/vector-icons

export default function TabLayout() {
return (
<Tabs
screenOptions={{
tabBarActiveTintColor: '#007AFF', // Cor da aba ativa (ex: azul)
tabBarInactiveTintColor: '#8E8E93', // Cor da aba inativa (ex: cinza)
tabBarStyle: {
backgroundColor: '#FFFFFF', // Fundo da barra de abas
},
headerStyle: {
backgroundColor: '#FFFFFF',
},
headerTitleStyle: {
fontWeight: 'bold',
},
}}
>
<Tabs.Screen
name="index"
options={{
title: 'Início',
tabBarIcon: ({ color }) => (
<FontAwesome size={26} name="home" color={color} />
),
}}
/>
<Tabs.Screen
name="sobre"
options={{
title: 'Sobre',
tabBarIcon: ({ color }) => (
<FontAwesome size={24} name="user" color={color} />
),
}}
/>
<Tabs.Screen
name="academico"
options={{
title: 'Formação',
tabBarIcon: ({ color }) => (
<Ionicons size={26} name="school" color={color} />
),
}}
/>
<Tabs.Screen
name="profissional"
options={{
title: 'Carreira',
tabBarIcon: ({ color }) => (
<MaterialIcons size={26} name="work" color={color} />
),
}}
/>
<Tabs.Screen
name="projetos"
options={{
title: 'Projetos',
tabBarIcon: ({ color }) => (
<FontAwesome size={24} name="lightbulb-o" color={color} />
),
}}
/>
</Tabs>
);
}