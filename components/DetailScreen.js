import {SafeAreaView, Text, View} from 'react-native';
import ButtonToBack from './ButtonToBack';
import React from 'react';
import main from '../styles/main';

const DetailScreen = () => {
    return (
        <SafeAreaView style={main.container}>
            <View style={main.main}>
                <Text style={main.title}>
                    Detail Page
                </Text>
                <ButtonToBack />
            </View>
        </SafeAreaView>
    );
};

export default DetailScreen;
