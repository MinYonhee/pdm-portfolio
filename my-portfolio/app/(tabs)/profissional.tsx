import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// --- Correção: Definindo o tipo ---
interface Job {
  id: string;
  periodo: string;
  titulo: string;
  empresa: string;
  descricao: string;
}

// --- Dados ---
const EXPERIENCIA_PROFISSIONAL: Job[] = [
  {
    id: '1',
    periodo: "2023 - Presente",
    titulo: "Desenvolvedor(a) Mobile Jr.",
    empresa: "Tech Solutions Inc.",
    descricao: "Desenvolvimento e manutenção de aplicativos móveis multiplataforma usando React Native, Expo, e integração com APIs REST."
  },
  {
    id: '2',
    periodo: "2022 - 2023",
    titulo: "Estagiário(a) de Desenvolvimento",
    empresa: "Inova Web",
    descricao: "Apoio no desenvolvimento de aplicações web com React e aprendizado de metodologias ágeis (Scrum)."
  }
];

// --- Correção: Tipando o 'item' ---
const JobItem = ({ item }: { item: Job }) => (
  <View style={styles.card}>
    <Text style={styles.periodo}>{item.periodo}</Text>
    <Text style={styles.titulo}>{item.titulo}</Text>
    <Text style={styles.empresa}>{item.empresa}</Text>
    <Text style={styles.descricao}>{item.descricao}</Text>
  </View>
);

export default function ProfissionalScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={EXPERIENCIA_PROFISSIONAL}
        renderItem={({ item }) => <JobItem item={item} />}
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
    marginBottom: 2,
  },
  empresa: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3C3C43',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  }
});