import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Details({ navigation, route }){
  const {name, data} = route.params;
  let datos = {nombre: 'Deadpool', version: 2}
  const pasar = () => {
    navigation.navigate('Pantalla 3', datos)
  }
    return(
      <View style={styles.container}>
        <Text>Details Screen {name} {data}</Text>
        <Button title={'ir a Login'} onPress={pasar}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    }
  }) 