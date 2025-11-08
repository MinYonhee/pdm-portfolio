import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';

interface Projeto {
  id: string;
  title: string;
  link: string;
  icon: keyof typeof FontAwesome.glyphMap;
}

const PROJETOS: Projeto[] = [
  {
    id: '1',
    title: 'Jogo Lola e Lia',
    link: 'https://lola-lia-jogo.vercel.app/',
    icon: 'gamepad', 
  },
  {
    id: '2',
    title: 'Decodificador de Texto',
    link: 'https://challenge-decodificador-alura-one-t7.vercel.app/',
    icon: 'code', 
  },
  {
    id: '3',
    title: 'Cook.io',
    link: 'https://projeto-desenvolvimento-web-five.vercel.app/login.html',
    icon: 'cutlery', 
  },
  {
    id: '4',
    title: 'Institucional MeIAjuda',
    link: 'https://site-institucional-meiajuda.vercel.app/',
    icon: 'heartbeat', 
  },
  {
    id: '5',
    title: 'Imobiliária Urban Valle',
    link: 'https://github.com/MinYonhee/projeto-frontend',
    icon: 'building', 
  },
  {
    id: '6',
    title: 'Jogo da Senha',
    link: '#', 
    icon: 'key', 
  },
];

const ProjectItem = ({ item }: { item: Projeto }) => (
  <TouchableOpacity
    style={styles.portfolioItem}
    onPress={() => item.link !== '#' && Linking.openURL(item.link)}
  >
    <FontAwesome name={item.icon} style={styles.projectIcon} />
    <Text style={styles.projectTitle}>{item.title}</Text>
  </TouchableOpacity>
);

export default function ProjetosScreen() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Projetos Recentes</Text>

      <FlatList
        data={PROJETOS}
        renderItem={({ item }) => <ProjectItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={1} 
        contentContainerStyle={styles.portfolioGrid}
      />
    </View>
  );
}