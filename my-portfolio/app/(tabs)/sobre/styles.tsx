import { StyleSheet } from 'react-native';

export const createStyles = (colors: any) => StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    paddingTop: 80,
    paddingHorizontal: 20,
    alignItems: 'center', 
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150, 
    height: 150,
    borderRadius: 75, 
    borderWidth: 5,
    borderColor: colors.cardBackground, 
    shadowColor: colors.shadow, 
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
    fontSize: 24, 
    fontWeight: '700',
    color: colors.text, 
    marginBottom: 0.5,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.cardBackground, 
    borderRadius: 15,
    padding: 20,
    width: '100%',
    shadowColor: colors.shadow, 
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 10,
    marginBottom: 30,
  },
  description: {
    fontSize: 16, 
    lineHeight: 24,
    color: colors.text, 
    textAlign: 'center', 
    marginBottom: 20,
  },
  cvButton: {
    paddingVertical: 12, 
    paddingHorizontal: 20,
    backgroundColor: colors.DUSTY_PURPLE, 
    borderRadius: 30,
    shadowColor: colors.shadow, 
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    alignSelf: 'center',
  },
  cvButtonText: {
    color: colors.textButton, 
    fontWeight: '500',
    fontSize: 14, 
    letterSpacing: 1,
  },
  skillsContainer: {
    width: '100%',
  },
  skillItem: {
    marginBottom: 18, 
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8, 
  },
  skillName: {
    fontWeight: '600',
    color: colors.text,
  },
  skillPercentage: {
    fontSize: 14,
    color: colors.text, 
    fontWeight: '500',
  },
  skillBar: {
    backgroundColor: colors.separator, 
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  skillLevel: {
    height: '100%',
    borderRadius: 5,
  },
});