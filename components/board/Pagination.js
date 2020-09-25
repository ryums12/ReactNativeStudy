import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class Pagination extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {curPage, lastPage, startPage, maxPage} = this.props;
        let components = [];

        components.push(
            <TouchableOpacity
                disabled={curPage === 1}
                onPress={() => {
                    this.props.page(curPage - 1)
                }}>
                <Text style={curPage === 1 ? styles.paginationItemDisabled : styles.paginationItem}>&lt;</Text>
            </TouchableOpacity>
        );
        for(let page = startPage; page <= lastPage; page++) {
            components.push(
                <TouchableOpacity
                    key={page-1}
                    onPress={() => {
                        this.props.page(page);
                    }}
                >
                    <Text style={page === curPage ? styles.paginationItemActive : styles.paginationItem}>{page}</Text>
                </TouchableOpacity>
            );
        }
        components.push(
            <TouchableOpacity
                disabled={curPage === maxPage}
                onPress={() => {
                    this.props.page(curPage + 1)
                }}
            >
                <Text style={curPage === maxPage ? styles.paginationItemDisabled : styles.paginationItem}>&gt;</Text>
            </TouchableOpacity>
        )
        return (
            <View style={styles.pagination}>
                { components }
            </View>
        );
    }
}

const styles = StyleSheet.create({
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

export default Pagination;
