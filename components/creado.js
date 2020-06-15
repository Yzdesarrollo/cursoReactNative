import React from 'react';
import { View, Text } from 'react-native';

export default function Creado(props){
    const {text, num} = props;
    return(
        <View>
            <Text>Componente creado {text}{num}</Text>
        </View>
    );
}