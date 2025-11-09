import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createStyles } from '../../../assets/styles/professionalStyles'; 
import { useTheme } from '../../../context/ThemeContext'; 

interface Experiencia {
  id: string;
  date: string;
  title: string;
  description: string;
}

const EXPERIENCIAS: Experiencia[] = [
  {
    id: '1',
    date: 'Fev 2025 - Atual',
    title: 'Jr. Front-End Developer',
    description: 'Como Analista Jr. com foco em Front-End na Avanade, atuo no desenvolvimento Mobile no App da Gol.',
  },
  {
    id: '2',
    date: 'Ago 2024 - Atual',
    title: 'Publicitária Freelance',
    description: 'Trabalho com diversos clientes nas mais diferentes frentes do mercado Publicitário.',
  },
  {
    id: '3',
    date: 'Ago 2024 - Out 2024',
    title: 'Estagiária de Marketing',
    description: 'Atuei como estagiária de Marketing na FAST com foco na solução FlowUp, auxiliando na criação de blogs com SEO e campanhas para Redes Sociais.',
  },
];

const TimelineItem = ({ item, styles }: { item: Experiencia; styles: any }) => (
  <View style={styles.timelineItem}>
    <View style={styles.timelineIcon}>
      <FontAwesome name="briefcase" size={12} color="#ff6347" /> 
    </View>
    <View style={styles.timelineContent}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </View>
);

export default function ProfissionalScreen() {
  const { colors } = useTheme();
  
  const styles = createStyles(colors);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Experiência Profissional</Text>
      
      <View style={styles.timelineContainer}>
        <View style={styles.timelineLine} />
        
        <FlatList
          data={EXPERIENCIAS}
          renderItem={({ item }) => <TimelineItem item={item} styles={styles} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingVertical: 20 }}
        />
      </View>
    </View>
  );
}