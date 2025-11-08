import { StyleSheet } from 'react-native';

export const COLORS = {
  white: '#FFFFFF',
  darkBlackberry: '#301934',
  dustyPurple: '#8E44AD', 
  background: '#F5F5F7',
};

export const styles = StyleSheet.create({
  section: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 26, 
    fontWeight: '700',
    marginBottom: 20, 
    color: COLORS.darkBlackberry,
    textAlign: 'center',
  },
  sectionDescription: {
    fontSize: 16, 
    marginBottom: 40, 
    color: COLORS.darkBlackberry,
    maxWidth: 600,
    lineHeight: 24, 
    textAlign: 'center',
  },
  cardsContainer: {
    width: '100%',
    alignItems: 'center', 
  },
  contactCard: {
    backgroundColor: COLORS.white,
    padding: 25,
    borderRadius: 15,
    shadowColor: "rgba(80, 52, 89, 0.1)", 
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 10,
    alignItems: 'center',
    width: '90%', 
    marginBottom: 20,
  },
  contactIcon: {
    fontSize: 35,
    marginBottom: 10,
    color: COLORS.dustyPurple, 
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: COLORS.darkBlackberry,
  },
  
  cardDescription: {
    fontSize: 14, 
    color: COLORS.darkBlackberry,
    marginBottom: 15,
    lineHeight: 21, 
    textAlign: 'center',
  },
  contactButton: {
    paddingVertical: 10, 
    paddingHorizontal: 20,
    backgroundColor: COLORS.darkBlackberry,
    borderRadius: 25,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 14, 
    fontWeight: '500',
  },
});