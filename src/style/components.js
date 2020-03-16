import { StyleSheet } from 'react-native';
import { NavbarColor, textMedium, color } from '../variables';

export const $Navbar = StyleSheet.create({
  Navbar: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: NavbarColor,
    height: 70,
  },
});

export const $List = StyleSheet.create({
  list: {
    flex: 1,
    marginVertical: 10,
  },
});

export const $Form = StyleSheet.create({
  Form: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input: {
    height: 50,
    width: '80%',
    marginHorizontal: 5,
    fontSize: textMedium,
    color,
    borderStyle: 'solid',
    borderWidth: 1,
    borderBottomColor: color,
  },

  button: {
    shadowColor: color,
  },
});
