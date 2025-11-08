import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// --- Constantes ---
const SOBRE_MIM = "Olá! Sou um(a) desenvolvedor(a) apaixonado(a) por criar experiências móveis incríveis com React Native e Expo. Este app é meu portfólio pessoal, onde demonstro minhas habilidades e projetos.";
const TECNOLOGIAS = [
  "React Native",
  "Expo (com Expo Router para navegação)",
  "JavaScript / TypeScript",
  "React Hooks",
  "StyleSheet para estilização",
];
const FUNCIONALIDADE_EXTRA = "Como funcionalidade extra, este app poderia incluir um seletor de tema (Light/Dark) usando Context API ou um gerenciador de estado, ou buscar dados de projetos do GitHub API.";

// --- Definindo os tipos para as props do Card ---
interface CardProps {
  title: string;
  children: React.ReactNode; // React.ReactNode é o tipo correto para "filhos" de componentes
}

// --- Aplicando a interface CardProps ---
const Card = ({ title, children }: CardProps) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    {children}
  </View>
);

export default function SobreScreen() {
  return (
    <ScrollView style={styles.container}>
      <Card title="Sobre Mim">
        <Text style={styles.cardText}>{SOBRE_MIM}</Text>
      </Card>

      <Card title="Tecnologias do App">
        {TECNOLOGIAS.map((tech) => (
          <Text key={tech} style={styles.listItem}>• {tech}</Text>
        ))}
      </Card>

      <Card title="FuncionalIDADE Extra (Ideia)">
        <Text style={styles.cardText}>{FUNCIONALIDADE_EXTRA}</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
    padding: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1C1C1E',
  },
  cardText: {
    fontSize: 16,
    color: '#3C3C43',
    lineHeight: 24,
  },
  listItem: {
    fontSize: 16,
    color: '#3C3C43',
    lineHeight: 24,
  }
});