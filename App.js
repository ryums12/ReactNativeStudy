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
import Main from './components/board/Board';
import BoardPut from './components/board/BoardPut';
import BoardDetail from './components/board/BoardDetail';
import { Provider } from 'react-redux'
import store from './redux/store';

const Stack = createStackNavigator();

const App = () => {
    React.useEffect(() => {
        return () => {
            isReadyRef.current = false
        };
    }, []);

    return (
        <Provider store={store}>
            <NavigationContainer
                ref={navigationRef}
                onReady={() => {
                    isReadyRef.current = true;
                }}
            >
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Main" component={Main} />
                    <Stack.Screen name="Put" component={BoardPut} />
                    <Stack.Screen name="Detail" component={BoardDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
