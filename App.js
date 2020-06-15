import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Creado from './components/creado';

export default function App(){
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    console.log('Ejecutando useEffect');
    console.log('Loading es ', loading);
  },[loading]);

  return(
    <View style={styles.container}>
      <Text>UseEffect</Text>
      {loading === true && <Creado />}
      <Button  title={'Actualizar estado'} onPress={() => setLoading(true)} />
      <Creado text='Props' num={2}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})