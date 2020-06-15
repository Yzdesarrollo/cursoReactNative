import React  from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';

const App = () =>{
  return(
    <View style={styles.container}>
      <Text>Hola</Text>
      <Image style={styles.imagen} source={require('./assets/splash.png')} />
      <TextInput style={styles.input} placeholder={'Usuario'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagen: {
    width: 300,
    height: 300
  },
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: 300,
    textAlign: 'center'
  }
})

export default App;