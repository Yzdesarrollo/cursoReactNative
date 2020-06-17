import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Card from './card';
import { FlatList } from 'react-native-gesture-handler';

export default function ListTasks() {
   /*  // Funcion
    // useEffect
    useEffect(() => {
            //Nombre funcion
    }, []) */
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];
    return (
        <View style={styles.container}>
            <Text>FlatList muestra los 3 elementos del array DATA</Text>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Card elemento={item}/>}
                keyExtractor={item => item.id}>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    }
})