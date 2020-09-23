import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

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

// class JustText extends Component {
//     render() {
//         const arr = this.props.arr;
//         return (
//             arr.map((num ,index) => (
//                 <View style={styles.container_test} key={index}>
//                     <Text style={styles.style_text}>{num}</Text>
//                 </View>
//             ))
//         );
//     }
// }


const styles = StyleSheet.create({
    container_test: {
        width: '100%',
        height: 30,
        backgroundColor: 'gray',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    style_text: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default JustText;
