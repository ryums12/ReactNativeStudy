/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-lo
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, isReadyRef } from './utils/NavigationService';
import HomeScreen from './components/screens/HomeScreen';
import MainScreen from './components/screens/MainScreen';
import DetailScreen from './components/screens/DetailScreen';

const Stack = createStackNavigator();

const App = () => {
    React.useEffect(() => {
        return () => {
            isReadyRef.current = false
        };
    }, []);

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                isReadyRef.current = true;
            }}
        >
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
