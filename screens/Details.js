import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Details({ navigation }){
    return(
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button title={'ir a Login'} onPress={()=> navigation.navigate('Pantalla 3')}/>
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