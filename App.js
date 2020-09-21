/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-lo
 */

import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const ButtonToMain = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.button_main}
                          onPress={() => navigation.navigate('Main')}>
            <Text style={styles.button_text}>
                Main
            </Text>
        </TouchableOpacity>
    );
};

const ButtonToDetail = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.button_main}
                          onPress={() => navigation.navigate('Details')}>
            <Text style={styles.button_text}>
                Details
            </Text>
        </TouchableOpacity>
    );
};

const ButtonToBack = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.button_main}
                          onPress={() => navigation.goBack()}>
            <Text style={styles.button_text}>
                Back
            </Text>
        </TouchableOpacity>
    );
};

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>
                    Main Page
                </Text>
                <ButtonToMain />
                <ButtonToDetail />
            </View>
        </SafeAreaView>
    );
};

const MainScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>
                    Main Page
                </Text>
                <ButtonToDetail />
                <ButtonToBack />
            </View>
        </SafeAreaView>
    );
};

const DetailsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>
                    Detail Page
                </Text>
                <ButtonToDetail />
                <ButtonToBack />
            </View>
        </SafeAreaView>
    );
};

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width: '100%',
        height: 350,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    button_main: {
        width: '90%',
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0CEDFA',
        borderRadius: 20
    },
    button_text: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default App;
