import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Card(props) {
    const { id,title } = props.elemento
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <Text>{id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5
    },
});