import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
      <View style={styles.v1}>
        <Text>Vista 1</Text>
      </View>
      <View style={styles.v2}>
        <Text>Vista 2</Text>
        <Text>Vista 2</Text>
        <Text>Vista 2</Text>
      </View>
      <View style={styles.v3}>
        <Text>Vista 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  text:{
    color: 'black'
  },
  v1: {
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
  },
  v2: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
  },
  v3: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
  }



})
