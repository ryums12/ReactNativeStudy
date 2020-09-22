import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity} from 'react-native';
import button from '../styles/button';

const ButtonToDetail = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={button.button_main}
                          onPress={() => navigation.navigate('Detail')}>
            <Text style={button.button_text}>
                Detail
            </Text>
        </TouchableOpacity>
    );
};

export default ButtonToDetail;
