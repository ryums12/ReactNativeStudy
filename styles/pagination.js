import { StyleSheet } from 'react-native';

const pagination = StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
    },
    paginationItem: {
        height: 40,
        width: 40,
        margin: 5,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 24,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'black'
    },
    paginationItemActive: {
        height: 40,
        width: 40,
        margin: 5,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 24,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'blue',
        color: 'white',
        fontWeight: 'bold'
    },
    paginationItemDisabled: {
        height: 40,
        width: 40,
        margin: 5,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 24,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'gray',
        color:'black'
    }
});

export default pagination;
