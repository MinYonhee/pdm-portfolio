import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// --- Correção: Definindo o tipo (molde) do nosso objeto ---
interface Experiencia {
  id: string;
  periodo: string;
  titulo: string;
  instituicao: string;
}

// --- Dados ---
// Agora, dizemos que o array é uma lista de 'Experiencia'
const EXPERIENCIA_ACADEMICA: Experiencia[] = [
  {
    id: '1',
    periodo: "2020 - 2024",
    titulo: "Bacharelado em Ciência da Computação",
    instituicao: "Universidade Fictícia (UniFict)"
  },
  {
    id: '2',
    periodo: "2023",
    titulo: "Curso Intensivo de React Native + Expo",
    instituicao: "Plataforma de Cursos Online"
  },
  {
    id: '3',
    periodo: "2022",
    titulo: "Bootcamp de Desenvolvimento Web",
    instituicao: "Escola de Código"
  }
];

// --- Correção: Tipando o 'item' nas props do componente ---
const ExperienceItem = ({ item }: { item: Experiencia }) => (
  <View style={styles.card}>
    <Text style={styles.periodo}>{item.periodo}</Text>
    <Text style={styles.titulo}>{item.titulo}</Text>
    <Text style={styles.instituicao}>{item.instituicao}</Text>
  </View>
);

export default function AcademicoScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={EXPERIENCIA_ACADEMICA}
        // Agora o TypeScript sabe que 'item' é do tipo 'Experiencia'
        renderItem={({ item }) => <ExperienceItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 15 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7',
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
  periodo: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 5,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 5,
  },
  instituicao: {
    fontSize: 16,
    color: '#3C3C43',
  }
});