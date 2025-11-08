import { StyleSheet } from 'react-native';

const COLORS = {
  darkBlackberry: '#301934', 
  iconBorder: '#ff6347',
  line: '#e0e0e0',
  textPrimary: '#555',
  textSecondary: '#777',
  white: '#FFFFFF',
  background: '#F5F5F7', 
};

export const styles = StyleSheet.create({
  section: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 20, 
  },
  sectionTitle: {
    fontSize: 24, 
    fontWeight: '700',
    marginBottom: 25, 
    textAlign: 'center',
    color: COLORS.darkBlackberry,
  },
  timelineContainer: {
    flex: 1,
    position: 'relative',
    marginHorizontal: 20, 
  },
  timelineLine: {
    position: 'absolute',
    width: 2,
    backgroundColor: COLORS.line,
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
    backgroundColor: COLORS.white,
    borderWidth: 2, 
    borderColor: COLORS.iconBorder,
    borderRadius: 15, 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelineContent: {
    padding: 20, 
    backgroundColor: COLORS.white,
    borderRadius: 6,
    marginLeft: 20, 
    shadowColor: "#000", 
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  date: {
    fontSize: 14, 
    color: COLORS.textSecondary,
    marginBottom: 5,
  },
  title: {
    fontSize: 18, 
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.darkBlackberry,
  },
  description: {
    fontSize: 16, 
    color: COLORS.textPrimary,
    lineHeight: 24, 
  },
});