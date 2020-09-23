import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import ButtonToBack from '../navigations/ButtonToBack';
import React from 'react';
import main from '../../styles/main';

const MainScreen = () => {
    return (
        <SafeAreaView style={main.container}>
            <View style={main.header}>
                <Text style={main.title}>
                    Main Page
                </Text>
            </View>
            <ScrollView>

            </ScrollView>
            <View style={{alignItems: 'center'}}>
                <ButtonToBack/>
            </View>
        </SafeAreaView>
    );
};

export default MainScreen;
