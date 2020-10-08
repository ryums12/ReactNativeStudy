import React, {Component} from 'react';
import axios from 'axios';
import {SafeAreaView, Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import main from '../../styles/main';
import * as NavigationService from '../../utils/NavigationService';
import Pagination from './Pagination';
import pagination from '../../styles/pagination';
import {connect} from 'react-redux';
import {setBoard} from '../../redux/actions/board';

class Board extends Component {

    constructor(props) {
        super(props);
        this.props.board.page = 1;
    }

    componentDidMount = () => {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener("focus", () => {
            this.getBoardData(this.props.board.page)
        });
    };

    componentWillUnmount() {
        this.focusListener();
    }

    getBoardData = (page) => {
        axios.get('http://10.0.0.122:3000/', {
            params: {
                offset: 10 * (page - 1),
            },
        })
            .then(res => {
                if (res.status == 200 || res.status == 201) {
                    const pageData = res.data.pageData[0];
                    const maxPage = parseInt(pageData.total / 10);
                    const startPage = parseInt((page - 1) / 5) * 5 + 1;
                    const lastPage = startPage + 4 < maxPage ? startPage + 4 : maxPage;

                    const data = {
                        tableData: res.data.tableData,
                        page: page,
                        maxPage: maxPage,
                        startPage: startPage,
                        lastPage: lastPage
                    }

                    const { dispatch } = this.props;
                    dispatch(setBoard(data));
                } else {
                    alert('실패');
                }
            })
            .catch(err => {
                alert(err);
                NavigationService.navigate('Home');
            });
    };

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
                        this.props.board.tableData ?
                            this.props.board.tableData.map(data => {
                                const idx = data.idx;
                                const regDt = String(data.reg_dt).substring(0, 10);
                                return (
                                    <TouchableOpacity
                                        key={idx}
                                        onPress={() => {
                                            NavigationService.navigate('Detail', {
                                                idx: idx,
                                                page: this.props.board.page,
                                            });
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
                        this.props.board.tableData ?
                            <View>
                                <View style={styles.inputButtonArea}>
                                    <TouchableOpacity
                                        style={styles.inputButton}
                                        onPress={() => {
                                            NavigationService.navigate('Put',null)
                                        }}
                                    >
                                        <View>
                                            <Text style={styles.inputButtonText}>글쓰기</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={pagination.pagination}>
                                    <TouchableOpacity
                                        disabled={this.props.board.page === 1}
                                        onPress={() => {
                                            this.getBoardData(this.props.board.page - 1);
                                        }}>
                                        <Text
                                            style={this.props.board.page === 1 ? pagination.paginationItemDisabled : pagination.paginationItem}>&lt;</Text>
                                    </TouchableOpacity>
                                    <Pagination
                                        curPage={this.props.board.page}
                                        startPage={this.props.board.startPage}
                                        lastPage={this.props.board.lastPage}
                                        paging={this.getBoardData}
                                    />
                                    <TouchableOpacity
                                        disabled={this.props.board.page === this.props.board.maxPage}
                                        onPress={() => {
                                            this.getBoardData(this.props.board.page + 1);
                                        }}
                                    >
                                        <Text
                                            style={this.props.board.page === this.props.board.maxPage ? pagination.paginationItemDisabled : pagination.paginationItem}>&gt;</Text>
                                    </TouchableOpacity>
                                </View>
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
    },
    inputButtonArea: {
        padding: 5,
        bottom: -10,
        alignItems: 'flex-end'
    },
    inputButton: {
        width: '30%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0CEDFA',
        borderRadius: 20
    },
    inputButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    }
});

const mapStateToProps = (state) => ({board: state.board});

export default connect(mapStateToProps)(Board);
