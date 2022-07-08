import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  Text: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    alignSelf: 'center',
    margin: '5%',
    fontWeight: 'bold',
  },
  View: {
    flexFlow: 'column noWrap',
    flex: 1,
  },
  Button: {
    alignSelf: 'center',
    width: '50%',
    margin: '2%',
  },
});

export default Style;
