import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';
import button from '../styles/button';

const ButtonToBack = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={button.button_main}
                          onPress={() => navigation.goBack()}>
            <Text style={button.button_text}>
                Back
            </Text>
        </TouchableOpacity>
    );
};

export default ButtonToBack;
