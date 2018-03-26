import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Footer = (props) => {
  const { textStyle, Footer } = styles;
  return (
    <View style={Footer}>
      <Text style={textStyle}>Copyright @Putri Ayu Hernawati</Text>
    </View>
  );
};
const styles = {
    Footer: {
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
export default Footer;
 // <View style={styles.box1}>
 //              <Text style={{fontSize: 20, color: 'white', textAlign:'center'}}>Pendidikan Teknik Informatika</Text>
 //          </View>

