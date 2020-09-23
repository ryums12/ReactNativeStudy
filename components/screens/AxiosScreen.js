import {SafeAreaView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import ButtonToNavi from './navigations/ButtonToNavi';
import main from '../styles/main';
import React from 'react';

const AxiosScreen = () => {
    return (
        <SafeAreaView style={main.container}>
            <View style={main.main}>
                <View style={main.header}>
                    <Text style={main.title}>
                        Axios
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default AxiosScreen;
