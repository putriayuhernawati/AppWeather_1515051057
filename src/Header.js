import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const { textStyle, Header } = styles;
  return (
    <View style={Header}>
      <Text style={textStyle}>Prakiraan Cuaca</Text>
    </View>
  );
};
const styles = {
    Header: {
    // flex: 1, //2:6
    backgroundColor: 'green',
    // flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    padding: 10,
    paddingTop: 10,
    position: 'relative',
  },

    textStyle: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center'
    }
}
export default Header;
 // <View style={styles.box1}>
 //              <Text style={{fontSize: 20, color: 'white', textAlign:'center'}}>Pendidikan Teknik Informatika</Text>
 //          </View>

