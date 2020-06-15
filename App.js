import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
      <View style={styles.v1}>
        <View style={styles.v2}>
          <Text>Color1</Text>
        </View>
        <View style={styles.v3}>
          <Text>Color2</Text>
        </View>
      </View>
      <View style={styles.v4}>
        <View style={styles.v5}>
          <Text>Color3</Text>
        </View>
        <View style={styles.v6}>
          <Text>Color4</Text>
        </View>
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
    color: 'yellow'
  },
  v1: {
        flex: 1,
        flexDirection: 'row'
  },
  v2: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
  },
  v3: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
  },
    v4: {
      flex: 1,
      flexDirection:'row'
  },
  v5: {
      flex: 1,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center'
  },
    v6: {
      flex: 1,
      backgroundColor: 'purple',
      justifyContent: 'center',
      alignItems: 'center'
  },

})
