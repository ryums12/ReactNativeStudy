import React, {Component} from 'react';
import {SafeAreaView, Text, View, ScrollView, StyleSheet} from 'react-native';
import ButtonToBack from '../navigations/ButtonToBack';
import main from '../../styles/main';
import ButtonToNavi from '../navigations/ButtonToNavi';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['제목', '작성일'],
            tableData: [
                {
                    idx : 1,
                    title: '테스트 제목',
                    regDt: '2020-XX-XX'
                },
                {
                    idx : 2,
                    title: '테스트 제목 2',
                    regDt: '2020-XX-XX'
                },
                {
                    idx : 3,
                    title: '테스트 제목 3',
                    regDt: '2020-XX-XX'
                },
                {
                    idx : 4,
                    title: '테스트 제목 4',
                    regDt: '2020-XX-XX'
                },
                {
                    idx : 5,
                    title: '테스트 제목 5',
                    regDt: '2020-XX-XX'
                },
                {
                    idx : 6,
                    title: '테스트 제목 6',
                    regDt: '2020-XX-XX'
                },
                {
                    idx : 7,
                    title: '테스트 제목 7',
                    regDt: '2020-XX-XX'
                },
                {
                    idx : 8,
                    title: '테스트 제목 8',
                    regDt: '2020-XX-XX'
                },
                {
                    idx : 9,
                    title: '테스트 제목 9',
                    regDt: '2020-XX-XX'
                },
                {
                    idx : 10,
                    title: '테스트 제목 10',
                    regDt: '2020-XX-XX'
                }
            ]
        }
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
                        this.state.tableData.map(data => {
                            return (
                                <View style={[styles.table, styles.borderBottom]}>
                                    <Text style={styles.title}>{data.title}</Text>
                                    <Text style={styles.regDt}>{data.regDt}</Text>
                                </View>
                            );
                        })
                    }
                    <View style={styles.footer}>
                        <View style={styles.buttonTab}>
                            <ButtonToBack />
                        </View>
                        <View style={styles.buttonTab}>
                            <ButtonToNavi navi='Put' />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    borderBottom: {
        borderBottomWidth: 1,
        borderColor: '#000'
    },
    table: {
        height: 75
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        paddingTop: 10,
        paddingLeft: 10,
        textDecorationLine: 'underline'
    },
    regDt: {
        textAlign: 'right',
        color: 'gray',
        fontSize: 18,
        paddingRight: 10
    },
    footer: {
        padding: 20,
        flexDirection: 'row'
    },
    buttonTab: {
        flex: 1,
        alignItems: 'center'
    }
});

export default Board;
