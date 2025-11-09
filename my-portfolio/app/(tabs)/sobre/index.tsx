import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking, Animated } from 'react-native';
import { createStyles } from './styles'; 
import { useTheme } from '../../../context/ThemeContext'; 

const skillColors = {
  marketing: '#8E44AD', 
  uiux: '#3498DB',      
  dev: '#E67E22',       
};

interface SkillBarProps {
  skill: string;
  percentage: number;
  color: string;
  styles: any; 
}

const SkillBar = ({ skill, percentage, color, styles }: SkillBarProps) => {
  const widthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: percentage,
      duration: 1500,
      delay: 500,
      useNativeDriver: false,
    }).start();
  }, [widthAnim, percentage]);

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
              width: animatedWidth,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default function SobreScreen() {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const handlePressCV = () => {
    Linking.openURL('https://www.canva.com/design/DAGVXOH0vzU/czuQT-3rM9N2KUBkWKts7g/edit?continue_in_browser=true');
  };

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../../assets/profile.jpg')}  
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
          {/* 💡 7. Passamos 'styles' como prop para o SkillBar */}
          <SkillBar skill="Marketing" percentage={90} color={skillColors.marketing} styles={styles} />
          <SkillBar skill="UI/UX Design" percentage={80} color={skillColors.uiux} styles={styles} />
          <SkillBar skill="Desenvolvimento" percentage={60} color={skillColors.dev} styles={styles} />
        </View>
      </View>
    </ScrollView>
  );
}