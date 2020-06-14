import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App(){
  return(
    <View style={estilos.container}>
      <Text style={estilos.text}>Hello World!...</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red'
  }
});
