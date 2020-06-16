import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Home({ navigation }){
  return(
    <View style={styles.container}>
      <Text>React Navigation</Text>
      <Button title='ir a Details' onPress={() => navigation.navigate('Pantalla2')  }/>
    </View>
  );
}

function Details(){
  return(
    <View style={styles.container}>
      <Text>React Navigation</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Pantalla1' component={Home} />
        <Stack.Screen name='Pantalla2' component={Details} />
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
  }
}) 

export default App;