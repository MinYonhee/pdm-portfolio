import { StyleSheet } from 'react-native';

interface ThemeColors {
  background: string;
  text: string;
  cardBackground: string;
  line: string;
  icon: string;
  tabBar: string;
  tabInactive: string;
  DUSTY_PURPLE: string;
  SHEER_LILAC: string;
  YELLOW_SKILL: string;
  RED_SKILL: string;
  BLUE_SKILL: string;
}

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    section: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: 80,
      paddingHorizontal: 20,
    },

    sectionTitle: {
      fontSize: 24,
      fontWeight: '700',
      marginBottom: 25,
      textAlign: 'center',
      color: colors.text,
    },

    timelineContainer: {
      flex: 1,
      position: 'relative',
      marginHorizontal: 20,
    },

    timelineLine: {
      position: 'absolute',
      width: 2,
      backgroundColor: colors.line,
      top: 20,
      bottom: 20,
      left: 14,
    },

    timelineItem: {
      position: 'relative',
      width: '100%',
      marginBottom: 30,
      paddingLeft: 35,
    },

    timelineIcon: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: 30,
      height: 30,
      zIndex: 100,
      backgroundColor: colors.cardBackground,
      borderWidth: 2,
      borderColor: colors.DUSTY_PURPLE,
      borderRadius: 15,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    timelineContent: {
      padding: 20,
      backgroundColor: colors.cardBackground,
      borderRadius: 6,
      marginLeft: 20,
      shadowColor: colors.text,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.15,
      shadowRadius: 1.41,
      elevation: 2,
    },

    date: {
      fontSize: 14,
      color: colors.tabInactive,
      marginBottom: 5,
    },

    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: colors.text,
    },

    description: {
      fontSize: 16,
      color: colors.text,
      lineHeight: 24,
    },
  });
