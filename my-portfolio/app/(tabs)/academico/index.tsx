import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

interface Formacao {
  id: string;
  date: string;
  title: string;
  description: string;
}

const FORMACAO_ACADEMICA: Formacao[] = [
  {
    id: '1',
    date: '2025 - Atual',
    title: 'Pós-Graduação Uniamérica',
    description: 'Desenvolvimento Full-Stack',
  },
  {
    id: '2',
    date: '2024 - Atual',
    title: 'Superior Tecnólogo - UNICAP',
    description: 'Sistema para Internet',
  },
  {
    id: '3',
    date: '2023 - 2024',
    title: 'MBA - Uniamérica',
    description: 'Jornalismo Digital',
  },
  {
    id: '4',
    date: '2018.2 - 2022.1',
    title: 'Bacharelado - UFPE',
    description: 'Comunicação Social - Publicidade e Propaganda',
  },
];

const TimelineItem = ({ item }: { item: Formacao }) => (
  <View style={styles.timelineItem}>
    <View style={styles.timelineIcon}>
      <Ionicons name="school" size={14} color="#ff6347" />
    </View>
    <View style={styles.timelineContent}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </View>
);

export default function AcademicoScreen() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Experiência Acadêmica</Text>
      
      <View style={styles.timelineContainer}>
        <View style={styles.timelineLine} />
        
        <FlatList
          data={FORMACAO_ACADEMICA}
          renderItem={({ item }) => <TimelineItem item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingVertical: 20 }}
        />
      </View>
    </View>
  );
}