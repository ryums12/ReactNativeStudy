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
import Home from './components/Home';
import MainScreen from './components/screens/MainScreen';
import AddAndDeleteScreen from './components/screens/AddAndDeleteScreen';
import FormScreen from './components/screens/FormScreen';
import ResultScreen from './components/screens/ResultScreen';
import AxiosScreen from './components/screens/AxiosScreen';

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
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="AaD" component={AddAndDeleteScreen} />
                <Stack.Screen name="Form" component={FormScreen}/>
                <Stack.Screen name="Result" component={ResultScreen}/>
                <Stack.Screen name="Axios" component={AxiosScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
