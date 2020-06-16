import React from 'react';
import {  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListUsers from './ListUsers';
import DetailsUsers from './DetailsUsers';


const Tab = createBottomTabNavigator();

export default function TabScreens(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Pantalla 4' component={ListUsers} />
                <Tab.Screen name='Pantalla 5' component={DetailsUsers} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}