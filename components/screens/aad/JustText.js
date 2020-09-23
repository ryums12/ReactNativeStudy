import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const JustText = (props) => {
    return (
        props.arr.map((num, index) => (
            <TouchableOpacity
                style={styles.container_test} key={index}
                onPress={() => {
                    props.delete(num)
                }}>
                <Text style={styles.style_text}>{num}</Text>
            </TouchableOpacity>
        ))
    );
}

const styles = StyleSheet.create({
    container_test: {
        width: '50%',
        height: 30,
        backgroundColor: 'gray',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    style_text: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default JustText;
