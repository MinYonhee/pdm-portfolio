import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { createStyles } from '../../../assets/styles/homeStyles'; 
import { useTheme } from '../../../context/ThemeContext'; 

const socialLinks = {
  instagram: 'https://www.instagram.com/beatrizcosta.dev',
  github: 'https://github.com/MinYonhee',
  linkedin: 'https://www.linkedin.com/in/beatrizsuelen-costa/',
};

export default function HomeScreen() {
  const router = useRouter();
  const { theme, toggleTheme, colors } = useTheme(); 
  
  const styles = createStyles(colors);

  const handleScrollToContact = () => {
    router.push('/contato');
  };

  return (
    <ImageBackground
      source={
        theme === 'light'
          ? require('../../../assets/background.jpg') 
          : require('../../../assets/dark.jpg')}
      style={styles.homeSection}
      resizeMode="cover"
      imageStyle={{ opacity: 0.5 }} 
    >
      <View style={styles.homeContent}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../../assets/perfil.jpg')} 
            style={styles.profileImage}
          />

          <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
            <FontAwesome
              name={theme === 'light' ? 'moon-o' : 'sun-o'}
              size={22}
              color={colors.icon} 
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.name}>Beatriz Costa</Text>
        <Text style={styles.title}>
          Olá, eu sou uma Desenvolvedora Full-Stack, atualmente trabalhando com Mobile com foco em Front-End e entusiasta de Dados
        </Text>

        <View style={styles.socialIcons}>
          {/* 💡 5. Usamos 'colors.text' (ou 'colors.icon') em vez de 'COLORS.darkBlackberry' */}
          <TouchableOpacity onPress={() => Linking.openURL(socialLinks.instagram)} style={styles.iconButton}>
            <FontAwesome name="instagram" size={24} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(socialLinks.github)} style={styles.iconButton}>
            <FontAwesome name="github" size={24} color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(socialLinks.linkedin)} style={styles.iconButton}>
            <FontAwesome name="linkedin" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.hireButton} onPress={handleScrollToContact}>
          <Text style={styles.hireButtonText}>Fala comigo!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}