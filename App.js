import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './screens/Details';
import Login from './screens/Login';

function Home({ navigation }){
  return(
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title='ir a Details' onPress={() => navigation.navigate('Pantalla 2',{name: 'Rocky', data: 4})  }/>
    </View>
  );
}

const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Pantalla 1' component={Home} />
        <Stack.Screen name='Pantalla 2' component={Details} />
        <Stack.Screen name='Pantalla 3' component={Login} />
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