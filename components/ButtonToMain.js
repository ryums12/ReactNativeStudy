import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import button from '../styles/button';

const ButtonToMain = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={button.button_main}
                          onPress={() => navigation.navigate('Main')}>
            <Text style={button.button_text}>
                Main
            </Text>
        </TouchableOpacity>
    );
};

export default ButtonToMain;
