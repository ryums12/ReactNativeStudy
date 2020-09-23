import { StyleSheet } from 'react-native';

const main = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 75,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    main: {
        width: '100%',
        height: 350,
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default main;
