import React, {Component} from 'react';
import axios from 'axios';
import {SafeAreaView, Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import ButtonToBack from '../navigations/ButtonToBack';
import main from '../../styles/main';
import ButtonToNavi from '../navigations/ButtonToNavi';
import * as NavigationService from '../../utils/NavigationService';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: [
                {
                    idx: 1,
                    title: '테스트 제목',
                    regDt: '2020-XX-XX',
                },
                {
                    idx: 2,
                    title: '테스트 제목 2',
                    regDt: '2020-XX-XX',
                },
                {
                    idx: 3,
                    title: '테스트 제목 3',
                    regDt: '2020-XX-XX',
                },
                {
                    idx: 4,
                    title: '테스트 제목 4',
                    regDt: '2020-XX-XX',
                },
                {
                    idx: 5,
                    title: '테스트 제목 5',
                    regDt: '2020-XX-XX',
                },
                {
                    idx: 6,
                    title: '테스트 제목 6',
                    regDt: '2020-XX-XX',
                },
                {
                    idx: 7,
                    title: '테스트 제목 7',
                    regDt: '2020-XX-XX',
                },
                {
                    idx: 8,
                    title: '테스트 제목 8',
                    regDt: '2020-XX-XX',
                },
                {
                    idx: 9,
                    title: '테스트 제목 9',
                    regDt: '2020-XX-XX',
                },
                {
                    idx: 10,
                    title: '테스트 제목 10',
                    regDt: '2020-XX-XX',
                },
            ],
            page: 1,
            offset: 0,
        };
    }

    // componentDidMount = () => {
    //     axios.get('http://10.0.0.122:3000/', {
    //             params: {
    //                 offset: this.state.offset
    //             }
    //         })
    //         .then(res => {
    //             if(res.status == 200 || res.status == 201) {
    //                 this.setState({
    //                     tableData: res.data
    //                 })
    //             } else {
    //                 alert("실패")
    //             }
    //         })
    //         .catch(err => {
    //             alert(err);
    //             NavigationService.navigate('Home')
    //         });
    // }


    render() {
        return (
            <SafeAreaView style={main.container}>
                <View style={[main.header, styles.borderBottom]}>
                    <Text style={main.title}>
                        게시판 메인
                    </Text>
                </View>
                <ScrollView>
                    {
                        this.state.tableData.map(data => {
                            const regDt = String(data.reg_dt).substring(0, 10);
                            return (
                                <View style={[styles.table, styles.borderBottom]}>
                                    <Text style={styles.title}>{data.title}</Text>
                                    <Text style={styles.regDt}>{data.regDt}</Text>
                                </View>
                            );
                        })
                    }
                    <View style={styles.pagination}>
                        <TouchableOpacity
                            disabled={this.state.page === 1}
                            onPress={() => {
                                alert('테스트');
                            }}>
                            <Text style={this.state.page === 1 ? styles.paginationItemDisabled : styles.paginationItem}>&lt;</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                alert('테스트');
                            }}
                        >
                            <Text style={styles.paginationItemActive}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                alert('테스트');
                            }}
                        >
                            <Text style={styles.paginationItem}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                alert('테스트');
                            }}
                        >
                            <Text style={styles.paginationItem}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                alert('테스트');
                            }}
                        >
                            <Text style={styles.paginationItem}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={ () => {
                                alert('테스트')
                            }}
                        >
                            <Text style={styles.paginationItem}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={ () => {
                                alert('테스트')
                            }}
                        >
                            <Text style={styles.paginationItem}>&gt;</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    borderBottom: {
        borderBottomWidth: 1,
        borderColor: '#000',
    },
    table: {
        height: 75,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        paddingTop: 10,
        paddingLeft: 10,
        textDecorationLine: 'underline',
    },
    regDt: {
        textAlign: 'right',
        color: 'gray',
        fontSize: 18,
        paddingRight: 10,
    },
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
        textAlignVertical: 'center'
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
        backgroundColor: 'gray'
    }
});

export default Board;
