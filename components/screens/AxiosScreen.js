import {SafeAreaView, Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import main from '../../styles/main';
import React from 'react';
import ButtonToBack from '../navigations/ButtonToBack';

const AxiosScreen = () => {
    return (
        <SafeAreaView style={main.container}>
            <View style={main.header}>
                <Text style={main.title}>
                    Axios Test Page
                </Text>
            </View>
            <ScrollView>

            </ScrollView>
            <View style={{alignItems: 'center'}}>
                <ButtonToBack />
            </View>
        </SafeAreaView>
    );
};

export default AxiosScreen;
