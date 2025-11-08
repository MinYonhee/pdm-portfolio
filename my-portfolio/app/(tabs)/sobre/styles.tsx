import { StyleSheet } from 'react-native';

// Objeto de cores (também movido para cá)
export const skillColors = {
  marketing: '#FBC02D', // Um amarelo mais vibrante (ex: --color-dusty-purple)
  uiux: '#E53935',       // Um vermelho (ex: --color-sheer-lilac)
  dev: '#1E88E5',        // Um azul (ex: --color-dark-blackberry)
};

// Exporta o objeto de estilos
export const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#F5F5F7', // Cor de fundo geral (ex: --color-white / --color-grape-glimmer)
  },
  container: {
    padding: 20,
    alignItems: 'center', // Alinha tudo ao centro, como no @media query
  },
  // (ex: .about-wrapper e .about-left-content)
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  // (ex: .about-image)
  profileImage: {
    width: 150, // (ex: clamp(120px, 30vw, 190px))
    height: 150,
    borderRadius: 75, // (ex: 50%)
    borderWidth: 5,
    borderColor: '#FFFFFF', // (ex: border: 8px solid var(--color-white))
    shadowColor: "rgba(80, 52, 89, 0.15)", // (ex: box-shadow)
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 25,
    elevation: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 24, // (ex: clamp(1.8rem, 5vw, 2.5rem))
    fontWeight: '700',
    color: '#301934', // (ex: --color-dark-blackberry)
    marginBottom: 20,
    textAlign: 'center',
  },
  // (ex: .about-card)
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    shadowColor: "rgba(80, 52, 89, 0.15)", // (ex: box-shadow)
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 10,
    marginBottom: 30,
  },
  // (ex: .description)
  description: {
    fontSize: 16, // (ex: 1.1em)
    lineHeight: 24, // (ex: 1.8)
    color: '#301934', // (ex: --color-dark-blackberry)
    textAlign: 'center', // Melhor para mobile
    marginBottom: 20,
  },
  // (ex: .download-cv-button)
  cvButton: {
    paddingVertical: 12, // (ex: 8px 20px)
    paddingHorizontal: 20,
    backgroundColor: '#8E44AD', // (ex: --color-dusty-purple)
    borderRadius: 30,
    shadowColor: "rgba(80, 52, 89, 0.25)", // (ex: box-shadow)
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    alignSelf: 'center', // (ex: width: fit-content)
  },
  cvButtonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 14, // (ex: 0.85em)
    letterSpacing: 1,
  },
  // (ex: .skills)
  skillsContainer: {
    width: '100%',
  },
  // (ex: .skill-item)
  skillItem: {
    marginBottom: 18, // (ex: gap: 20px)
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8, // (ex: gap: 8px)
  },
  // (ex: .skill-name)
  skillName: {
    fontWeight: '600',
    color: '#301934', // (ex: --color-dark-blackberry)
  },
  // (ex: .skill-percentage)
  skillPercentage: {
    fontSize: 14,
    color: '#301934',
    fontWeight: '500',
  },
  // (ex: .skill-bar)
  skillBar: {
    backgroundColor: '#E0BBE4', // (ex: --color-grape-glimmer)
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  // (ex: .skill-level)
  skillLevel: {
    height: '100%',
    borderRadius: 5,
  },
});