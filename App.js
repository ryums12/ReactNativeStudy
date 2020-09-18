/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const App = () => {

    const onPress = (msg) => alert('Click : ' + msg);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>
                    Main
                </Text>
                <TouchableOpacity
                    style={styles.button_main}
                    onPress={() => {
                        onPress('Main')
                    }}
                >
                    <Text style={styles.button_text}>
                        Main
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button_main}
                    onPress={() => {
                        onPress('Go to')
                    }}
                >
                    <Text style={styles.button_text}>
                        Go to
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
