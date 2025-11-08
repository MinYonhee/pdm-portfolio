import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ImageBackground,
  Animated,
} from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { styles, COLORS } from './styles';

const socialLinks = {
  instagram: 'https://www.instagram.com/beatrizcosta.dev',
  github: 'https://github.com/MinYonhee',
  linkedin: 'https://www.linkedin.com/in/beatriz-suelen-costa/',
};

const MouseScrollAnimation = () => {
  const scrollAnim = useRef(new Animated.Value(6)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scrollAnim, {
          toValue: 18, 
          duration: 2000, 
          useNativeDriver: true, 
        }),
        Animated.timing(scrollAnim, {
          toValue: 6, 
          duration: 0, 
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [scrollAnim]);

  return (
    <View style={styles.mouseIcon}>
      <Animated.View style={[styles.mouseScroll, { transform: [{ translateY: scrollAnim }] }]} />
    </View>
  );
};

export default function HomeScreen() {
  const router = useRouter();

  const handleScrollToContact = () => {
    router.push('/contato');
  };

  const handleScrollToAbout = () => {
    router.push('/sobre');
  };

  return (
    <ImageBackground
     // source={require('../../../assets/background.jpg')}
      style={styles.homeSection}
      resizeMode="cover"
      imageStyle={{ opacity: 0.5 }}
    >
      <View style={styles.homeContent}>
        <Image
          //source={require('../../../assets/perfil.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Beatriz Costa</Text>
        <Text style={styles.title}>
          Olá, eu sou uma Desenvolvedora Full-Stack, atualmente trabalhando com Mobile com foco em Front-End e entusiasta de Dados
        </Text>

        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={() => Linking.openURL(socialLinks.instagram)} style={styles.iconButton}>
            <FontAwesome name="instagram" size={24} color={COLORS.darkBlackberry} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(socialLinks.github)} style={styles.iconButton}>
            <FontAwesome name="github" size={24} color={COLORS.darkBlackberry} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(socialLinks.linkedin)} style={styles.iconButton}>
            <FontAwesome name="linkedin" size={24} color={COLORS.darkBlackberry} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.hireButton} onPress={handleScrollToContact}>
          <Text style={styles.hireButtonText}>Fala comigo!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.scrollDown} onPress={handleScrollToAbout}>
          <Text style={styles.scrollText}>Scroll Down</Text>
          <MouseScrollAnimation />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}