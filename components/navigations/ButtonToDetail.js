import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import * as NavigationService from '../../utils/NavigationService';
import button from '../../styles/button';

const ButtonToDetail = () => {
    return (
        <TouchableOpacity style={button.button_main}
                          onPress={() => NavigationService.navigate('Detail')}>
            <Text style={button.button_text}>
                Detail
            </Text>
        </TouchableOpacity>
    );
};

export default ButtonToDetail;
