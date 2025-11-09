import { StyleSheet } from 'react-native';

export const createStyles = (colors: any) =>
  StyleSheet.create({
    section: {
      flex: 1,
      backgroundColor: colors.background,
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
      marginBottom: 20,
      color: colors.text,
      textAlign: 'center',
    },
    sectionDescription: {
      fontSize: 16,
      marginBottom: 40,
      color: colors.text,
      maxWidth: 600,
      lineHeight: 24,
      textAlign: 'center',
    },
    cardsContainer: {
      width: '100%',
      alignItems: 'center',
    },
    contactCard: {
      backgroundColor: colors.cardBackground,
      padding: 25,
      borderRadius: 15,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 8 },
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
      color: colors.DUSTY_PURPLE,
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 8,
      color: colors.text,
    },
    cardDescription: {
      fontSize: 14,
      color: colors.text,
      marginBottom: 15,
      lineHeight: 21,
      textAlign: 'center',
    },
    contactButton: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: colors.DUSTY_PURPLE,
      borderRadius: 25,
    },
    buttonText: {
      color: colors.textButton,
      fontSize: 14,
      fontWeight: '500',
    },
  });
