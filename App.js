import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, Alert  } from 'react-native';
import Componente1 from './components/creado';

const App = () =>{
  const saludo = () => {Alert.alert('Hola Mundo')};
  const [nombre, setNombre] = useState();
  return(
    <View style={styles.container}>
      <Text>{nombre}</Text>
      <Image style={styles.imagen} source={require('./assets/splash.png')} />
      <Componente1 />
      <TextInput style={styles.input} placeholder={'Usuario'} onChangeText={(texto)=> setNombre(texto)}/>
      <Button title={'Start'} onPress={saludo}/>
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