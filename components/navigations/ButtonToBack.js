import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import * as NavigationService from '../../utils/NavigationService';
import button from '../../styles/button';

const ButtonToBack = () => {
    return (
        <TouchableOpacity style={button.button_main}
                          onPress={() => NavigationService.goBack()}>
            <Text style={button.button_text}>
                Back
            </Text>
        </TouchableOpacity>
    );
};

export default ButtonToBack;
