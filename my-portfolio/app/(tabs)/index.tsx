import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// --- Constantes (Preencha com seus dados) ---
const MEU_NOME = "Seu Nome Aqui";
const MINHA_FUNCAO = "Desenvolvedor(a) React Native";
const MEU_GITHUB = "https://www.google.com/search?q=https://github.com/seu-usuario";
const MEU_LINKEDIN = "https://www.google.com/search?q=https://linkedin.com/in/seu-usuario";
const MEU_CV_LINK = "https://www.google.com/search?q=https://seu-site.com/cv.pdf"; // Link para seu CV (opcional)

export default function HomeScreen() {
return (
<View style={styles.container}>
<Image
source={{ uri: 'https://www.google.com/search?q=https://placehold.co/150x150/007AFF/FFFFFF%3Ftext%3DEU' }}
style={styles.profileImage}
/>
<Text style={styles.name}>{MEU_NOME}</Text>
<Text style={styles.title}>{MINHA_FUNCAO}</Text>

  <View style={styles.socialContainer}>
    <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL(MEU_GITHUB)}>
      <FontAwesome name="github" size={32} color="#333" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL(MEU_LINKEDIN)}>
      <FontAwesome name="linkedin-square" size={32} color="#0A66C2" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL(MEU_CV_LINK)}>
      <FontAwesome name="file-text" size={30} color="#555" />
    </TouchableOpacity>
  </View>
</View>


);
}

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#F5F5F7', // Um cinza claro de fundo
padding: 20,
},
profileImage: {
width: 150,
height: 150,
borderRadius: 75,
marginBottom: 20,
borderWidth: 4,
borderColor: '#007AFF',
},
name: {
fontSize: 28,
fontWeight: 'bold',
color: '#1C1C1E',
},
title: {
fontSize: 18,
color: '#8E8E93',
marginTop: 5,
},
socialContainer: {
flexDirection: 'row',
marginTop: 30,
},
socialButton: {
marginHorizontal: 15,
padding: 10,
},
});