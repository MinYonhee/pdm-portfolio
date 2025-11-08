import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { styles, COLORS } from './styles';
import { FontAwesome } from '@expo/vector-icons';

const whatsappNumber = '5581995052771';
const instagramHandle = 'beatrizcosta.dev';
const emailAddress = 'beatrizcostapubli@gmail.com';

const handleWhatsAppClick = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  Linking.openURL(whatsappUrl);
};

const handleInstagramClick = () => {
  const instagramUrl = `https://www.instagram.com/${instagramHandle}`;
  Linking.openURL(instagramUrl);
};

const handleEmailClick = () => {
  const emailUrl = `mailto:${emailAddress}`;
  Linking.openURL(emailUrl);
};

export default function ContatoScreen() {
  return (
    <ScrollView style={styles.section} contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Vamos trocar uma ideia?</Text>
      <Text style={styles.sectionDescription}>
        Se você quiser dar vida a um projeto, compartilhar conhecimento ou só bater um papo, é assim que você pode me contatar!
      </Text>

      <View style={styles.cardsContainer}>
        {/* Card WhatsApp */}
        <View style={styles.contactCard}>
          <FontAwesome name="whatsapp" size={35} style={styles.contactIcon} />
          <Text style={styles.cardTitle}>WhatsApp</Text>
          <Text style={styles.cardDescription}>Estou sempre disponível no WhatsApp!</Text>
          <TouchableOpacity style={styles.contactButton} onPress={handleWhatsAppClick}>
            <Text style={styles.buttonText}>Abrir WhatsApp</Text>
          </TouchableOpacity>
        </View>

        {/* Card Instagram */}
        <View style={styles.contactCard}>
          <FontAwesome name="instagram" size={35} style={styles.contactIcon} />
          <Text style={styles.cardTitle}>Instagram</Text>
          <Text style={styles.cardDescription}>Você pode acompanhar de perto a minha jornada tech pelo instagram.</Text>
          <TouchableOpacity style={styles.contactButton} onPress={handleInstagramClick}>
            <Text style={styles.buttonText}>Acessar Instagram</Text>
          </TouchableOpacity>
        </View>

        {/* Card Email */}
        <View style={styles.contactCard}>
          <FontAwesome name="envelope" size={35} style={styles.contactIcon} />
          <Text style={styles.cardTitle}>Email</Text>
          <Text style={styles.cardDescription}>Se você prefere a formalidade, pode me mandar um email também!</Text>
          <TouchableOpacity style={styles.contactButton} onPress={handleEmailClick}>
            <Text style={styles.buttonText}>Enviar Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}