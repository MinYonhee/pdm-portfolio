import { StyleSheet } from 'react-native';

// Cores (reutilizando o padrão do app)
export const COLORS = {
  white: '#FFFFFF',
  darkBlackberry: '#301934',
  dustyPurple: '#8E44AD', // Cor principal para ícones
  background: '#F5F5F7',
};

export const styles = StyleSheet.create({
  // (ex: .portfolio-section)
  section: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 40,
    paddingHorizontal: 10, 
  },
  sectionTitle: {
    fontSize: 26, 
    fontWeight: '700',
    marginBottom: 30, 
    color: COLORS.darkBlackberry,
    textAlign: 'center',
  },
  portfolioGrid: {
    paddingHorizontal: 5, 
  },
  portfolioItem: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    shadowColor: "rgba(80, 52, 89, 0.1)", 
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
    height: 120, 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15, 
    
  },
  projectIcon: {
    fontSize: 32, 
    color: COLORS.dustyPurple,
    marginBottom: 10, 
  },
  projectTitle: {
    fontSize: 16, 
    fontWeight: 'bold',
    color: COLORS.darkBlackberry,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});