import { StyleSheet } from 'react-native';
export const GlobalStyle = StyleSheet.create({
  tapBtn: {
    width: 108,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  infoLabel: { color: '#6B6B6B', fontSize: 16, fontWeight: 500 },
  infoValue: { color: '#000', fontSize: 16, fontWeight: 500 },
  nutriContainer: {
    padding: 10,
    backgroundColor: '#EFEFF4',
  },
  nutriLabel: { color: '#6B6B6B', fontSize: 18, fontWeight: 500 },
  parentDivider: {
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 2.5,
    marginVertical: 5,
  },
  childDivider: {
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  customBoxShadow: {
    elevation: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  addProdBtn: {
    elevation: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    borderRadius: 20,
    padding: 2,
    right: 5,
  },
});
