import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
export default class Weather extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
      }
    };
  }
getWeather= () => {
  let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=30edd360a92bca29777ef26d64a1168d&units=metric';

  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp
      }
    });
  }
  );

}
  render() {
    return (
    <View style={styles.containerMain}>
        
        <View style={styles.box1}>
            <Text style={{fontSize: 20, color: 'white', textAlign:'center'}}>Perkiraan Cuaca</Text>
        </View>

      < View style={styles.kolomsearch}>
          <Text style={{ padding: 10, textAlign: 'center', color: '#0D47A1', fontSize: 20 }}> Masukan Nama Kota </Text>
          <TextInput style={{ height: 50, color: 'black'}}
              placeholder=" Masukan Nama kota "
              onChangeText={(city) => this.setState({ city })}
            />
            <Button
              onPress={() => this.getWeather()}
              title="Cari"
              color="#2196F3"
              padding="20"
              accessibilityLabel="Klik untuk melihat cuaca"
            />
      </View>

      <View style={styles.box4}>
          <Text> City : { this.state.city} </Text>
          <Text> Temp : { this.state.forecast.temp} </Text>
          <Text> Main : { this.state.forecast.main} </Text>
          <Text> Description : { this.state.forecast.description} </Text>

      </View>

    <View style={styles.box1}>
        <Text style={{fontSize: 20, color: 'white', textAlign:'center'}}>Copyright @Putri Ayu Hernawati</Text>
    </View>
      
</View>
    );
  }
}


const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#BBDEFB',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1, //2:6
    backgroundColor: '#2196F3',
    // flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center'
  },
  box2: {
    flex: 1, //2:6
    backgroundColor: '#0D47A1',
    // flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center'
  },
  kolomsearch: {
    flex: 3, //1:6
    backgroundColor: '#90CAF9',
    flexDirection: 'column',
    margin:15,
    padding: 1
  },
  box4: {
    flex: 5,
    backgroundColor: '#90CAF9',
    margin: 15,
    // justifyContent: 'space-around',
    flexDirection: 'column'
  },
  button: {
    width: 180,
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 10
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#feb401',
    borderColor: '#feaf12',
    //borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    height: 40,
    width: 30,
  },
  icon: {
    tintColor: '#fff',
    height: 20,
    width: 20,
  }
});
