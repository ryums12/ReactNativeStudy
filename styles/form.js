import { StyleSheet } from 'react-native';

const form = StyleSheet.create({
    form: {
        alignItems: 'center'
    },
    inputGroup: {
        width: '90%'
    },
    label: {
        height: 50,
        justifyContent: 'center'
    },
    labelText: {
        fontSize: 20,
        color: 'blue'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1
    },
    submit: {
        height: 50,
        width: '90%',
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 20
    },
    submitText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default form;
