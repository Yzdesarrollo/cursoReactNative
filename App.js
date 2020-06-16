import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './screens/Details';
import Login from './screens/Login';

function Home({ navigation }){
  let data = { name: 'Rocky', data: 4 }
  return(
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title='ir a Details' onPress={() => navigation.navigate('Pantalla 2',data)}/>
    </View>
  );
}

const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {headerStyle:{backgroundColor:'#FFA000'}, headerTintColor: '#fff'}
      }>
        <Stack.Screen name='Pantalla 1' component={Home} options={{title:'Inicio'}}/>
        <Stack.Screen name='Pantalla 2' component={Details} options={{title:'Detalle'}} />
        <Stack.Screen name='Pantalla 3' component={Login} options={{title:'Ingreso'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  
}) 

export default App;