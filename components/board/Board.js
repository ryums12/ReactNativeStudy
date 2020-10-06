import React, {Component} from 'react';
import axios from 'axios';
import {SafeAreaView, Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import main from '../../styles/main';
import * as NavigationService from '../../utils/NavigationService';
import Pagination from './Pagination';
import pagination from '../../styles/pagination';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: '',
            page: 1,
            offset: 0,
            startPage: 1,
            lastPage: 5
        };
    }

    componentDidMount = () => {
        this.getBoardData(1);
    }

    getBoardData = (page) => {
        const offset = 10 * (page - 1);
        this.setState({
            offset: offset,
            page: page
        }, () => {
            axios.get('http://10.0.0.122:3000/', {
                params: {
                    offset: this.state.offset
                }
            })
                .then(res => {
                    if(res.status == 200 || res.status == 201) {
                        const pageData = res.data.pageData[0];
                        const maxPage = parseInt(pageData.total/10);
                        const startPage = parseInt((this.state.page-1)/5)*5 + 1;
                        const lastPage = startPage + 4 < maxPage ? startPage + 4 : maxPage;

                        this.setState({
                            tableData: res.data.tableData,
                            maxPage: maxPage,
                            startPage: startPage,
                            lastPage: lastPage
                        })
                    } else {
                        alert("실패")
                    }
                })
                .catch(err => {
                    alert(err);
                    NavigationService.navigate('Home')
                });
        });
    }

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
                        this.state.tableData ?
                        this.state.tableData.map(data => {
                            const idx = data.idx;
                            const regDt = String(data.reg_dt).substring(0, 10);
                            return (
                                <TouchableOpacity
                                    key={idx}
                                    onPress={() => {
                                        NavigationService.navigate('Detail', {
                                            idx: idx
                                        })
                                    }}
                                >
                                    <View style={[styles.table, styles.borderBottom]}>
                                        <Text style={styles.title}>{data.title}</Text>
                                        <Text style={styles.regDt}>{regDt}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        })
                            :
                            <View>
                                <Text>Loading...</Text>
                            </View>
                    }
                    {
                        this.state.tableData ?
                            <View style={pagination.pagination}>
                                <TouchableOpacity
                                    disabled={this.state.page === 1}
                                    onPress={() => {
                                        this.getBoardData(this.state.page - 1)
                                    }}>
                                    <Text style={this.state.page === 1 ? pagination.paginationItemDisabled : pagination.paginationItem}>&lt;</Text>
                                </TouchableOpacity>
                                <Pagination
                                    curPage={this.state.page}
                                    startPage={this.state.startPage}
                                    lastPage={this.state.lastPage}
                                    paging={this.getBoardData}
                                />
                                <TouchableOpacity
                                    disabled={this.state.page === this.state.maxPage}
                                    onPress={() => {
                                        this.getBoardData(this.state.page + 1)
                                    }}
                                >
                                    <Text style={this.state.page === this.state.maxPage ? pagination.paginationItemDisabled : pagination.paginationItem}>&gt;</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View></View>
                    }
                </ScrollView>
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
    }
});

export default Board;
