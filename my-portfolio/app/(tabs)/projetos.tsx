import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// --- Correção: Definindo o tipo ---
interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  link: string;
}

// --- Dados ---
const PROJETOS: Projeto[] = [
  {
    id: '1',
    titulo: "App de Lista de Tarefas (Todo-List)",
    descricao: "Um app de tarefas simples com persistência de dados local (AsyncStorage) e gestos.",
    link: "https://github.com/seu-usuario/repo-1"
  },
  {
    id: '2',
    titulo: "Clone de UI (Ex: Instagram)",
    descricao: "Recriação da interface de um app popular para praticar layout, navegação e animações.",
    link: "https://github.com/seu-usuario/repo-2"
  },
  {
    id: '3',
    titulo: "App de Previsão do Tempo",
    descricao: "Aplicativo que consome uma API de clima (como OpenWeatherMap) para exibir a previsão.",
    link: "https://github.com/seu-usuario/repo-3"
  }
];

// --- Correção: Tipando o 'item' ---
const ProjectItem = ({ item }: { item: Projeto }) => (
  <View style={styles.card}>
    <Text style={styles.titulo}>{item.titulo}</Text>
    <Text style={styles.descricao}>{item.descricao}</Text>
    <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL(item.link)}>
      <FontAwesome name="github" size={18} color="#FFFFFF" />
      <Text style={styles.linkButtonText}>Ver no GitHub</Text>
    </TouchableOpacity>
  </View>
);

export default function ProjetosScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={PROJETOS}
        renderItem={({ item }) => <ProjectItem item={item} />}
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
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 5,
  },
  descricao: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    marginBottom: 15,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  linkButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: 15,
  }
});