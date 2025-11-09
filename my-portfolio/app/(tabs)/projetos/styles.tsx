import { StyleSheet } from 'react-native';

export const createStyles = (colors: any) => StyleSheet.create({
  section: {
    flex: 1,
    backgroundColor: colors.background, 
    paddingTop: 80,
    paddingHorizontal: 20, 
  },
  container: {
    paddingTop: 80,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 26, 
    fontWeight: '700',
    marginBottom: 30, 
    color: colors.text, 
    textAlign: 'center',
  },
  portfolioGrid: {
    paddingHorizontal: 5, 
  },
  portfolioItem: {
    backgroundColor: colors.cardBackground, 
    borderRadius: 10,
    shadowColor: colors.shadow, 
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
    color: colors.DUSTY_PURPLE, 
    marginBottom: 10, 
  },
  projectTitle: {
    fontSize: 16, 
    fontWeight: 'bold',
    color: colors.text, 
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});