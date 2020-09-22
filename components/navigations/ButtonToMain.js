import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import * as NavigationService from '../../utils/NavigationService';
import button from '../../styles/button';

const ButtonToMain = () => {
    return (
        <TouchableOpacity style={button.button_main}
                          onPress={() => NavigationService.navigate('Main')}>
            <Text style={button.button_text}>
                Main
            </Text>
        </TouchableOpacity>
    );
};

export default ButtonToMain;
