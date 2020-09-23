import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import * as NavigationService from '../../utils/NavigationService';
import button from '../../styles/button';

const ButtonToNavi = (props) => {
    return (
        <TouchableOpacity style={button.button_main}
                          onPress={() => NavigationService.navigate(props.navi)}>
            <Text style={button.button_text}>
                {props.navi}
            </Text>
        </TouchableOpacity>
    );
};

export default ButtonToNavi;
