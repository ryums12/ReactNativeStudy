import {SafeAreaView, Text, View} from 'react-native';
import ButtonToMain from '../navigations/ButtonToMain';
import ButtonToDetail from '../navigations/ButtonToDetail';
import main from '../../styles/main';
import React from 'react';

const HomeScreen = () => {
    return (
        <SafeAreaView style={main.container}>
            <View style={main.main}>
                <Text style={main.title}>
                    Home
                </Text>
                <ButtonToMain />
                <ButtonToDetail />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
