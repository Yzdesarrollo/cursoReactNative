import * as React from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';


export default function App(){
  const [tareas, setTareas] = React.useState('');
  const [fecha, setFecha] = React.useState('');
  const createTarea = async ()=>{
      try {
        const response = fetch('http://192.168.0.14:puerto/',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            task: tareas,
            date: fecha
          })
        });
        const json = await response.json();
        Alert.alert('Tarea creada');
      } catch (error) {
        console.log(error);
      }
  }
  return(
    <View style={styles.container}>
      <TextInput placeholder='Enter Task' onChangeText={text => setTareas(text)}/>
      <TextInput placeholder='Enter Date'onChangeText={text => setFecha(text)}/>
      <Button title='Create Task' onPress={createTarea}/>
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