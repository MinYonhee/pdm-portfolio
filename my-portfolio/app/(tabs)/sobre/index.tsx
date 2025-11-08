import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking, Animated } from 'react-native';
// Importando os estilos do arquivo separado
import { styles, skillColors } from './styles';

// --- Tipagem ---
interface SkillBarProps {
  skill: string;
  percentage: number;
  color: string;
}

// --- Componente da Barra de Habilidade com Animação ---
const SkillBar = ({ skill, percentage, color }: SkillBarProps) => {
  // 'useRef' para guardar o valor da animação
  const widthAnim = useRef(new Animated.Value(0)).current;

  // 'useEffect' para disparar a animação quando o componente montar
  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: percentage, // Anima até o valor da porcentagem
      duration: 1500, // (ex: animation: loadSkill 2s)
      delay: 500, // Um pequeno atraso para começar
      useNativeDriver: false, // 'width' não é suportado pelo native driver
    }).start();
  }, [widthAnim, percentage]);

  // Interpola o valor numérico (0-100) para uma string ('0%' - '100%')
  const animatedWidth = widthAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.skillItem}>
      <View style={styles.skillHeader}>
        <Text style={styles.skillName}>{skill}</Text>
        <Text style={styles.skillPercentage}>{percentage}%</Text>
      </View>
      <View style={styles.skillBar}>
        <Animated.View
          style={[
            styles.skillLevel,
            {
              backgroundColor: color,
              width: animatedWidth, // Aplica a largura animada
            },
          ]}
        />
      </View>
    </View>
  );
};

// --- Componente principal ---
export default function SobreScreen() {
  const handlePressCV = () => {
    // Substitua pela URL real do seu CV
    Linking.openURL('https://www.canva.com/design/DAGVXOH0vzU/czuQT-3rM9N2KUBkWKts7g/edit?continue_in_browser=true');
  };

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/profile.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.sectionTitle}>Sobre mim</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.description}>
          Eu sou Beatriz Costa, Publicitária e Desenvolvedora Full-Stack. Apaixonada por comunicação e tecnologia, resolvi unir os dois mundos.
        </Text>
        <TouchableOpacity style={styles.cvButton} onPress={handlePressCV}>
          <Text style={styles.cvButtonText}>Acesse o meu CV</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.skillsContainer}>
          <SkillBar skill="Marketing" percentage={90} color={skillColors.marketing} />
          <SkillBar skill="UI/UX Design" percentage={80} color={skillColors.uiux} />
          <SkillBar skill="Desenvolvimento" percentage={60} color={skillColors.dev} />
        </View>
      </View>
    </ScrollView>
  );
}