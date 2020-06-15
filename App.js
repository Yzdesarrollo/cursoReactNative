import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <View style={estilos.v1}>
        <Text style={estilos.text}>vista 1</Text>
      </View>
      <View style={estilos.v2}>
        <Text style={estilos.text}>vista 2</Text>
      </View>
      <View style={estilos.v3}>
        <Text style={estilos.text}>vista 3</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column'
  },
  text: {
    color: 'black'
  },
  v1: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  v2: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  v3: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
