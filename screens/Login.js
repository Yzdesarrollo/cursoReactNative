import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.v1}>
                <Text style={styles.text}>cesde</Text>
            </View>
            <View style={styles.v2}>
                <Text>Parte 2</Text>
            </View>
            <View style={styles.v3}>
                <Text>Parte 3</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'blue',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    v1: {
        flex: 2/3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6200ea'
    },
    v2: {
        flex: 1/3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    v3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff'

    }
})

