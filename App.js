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


// import AaD from './components/screens/AaD';
// import FormScreen from './components/screens/FormScreen';
// import ResultScreen from './components/screens/ResultScreen';
// import AxiosScreen from './components/screens/AxiosScreen';

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
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Put" component={BoardPut} />
                <Stack.Screen name="Detail" component={BoardDetail} />
                {/*<Stack.Screen name="AaD" component={AaD} />*/}
                {/*<Stack.Screen name="Form" component={FormScreen}/>*/}
                {/*<Stack.Screen name="Result" component={ResultScreen}/>*/}
                {/*<Stack.Screen name="Axios" component={AxiosScreen}/>*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
