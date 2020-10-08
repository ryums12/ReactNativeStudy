import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
import main from '../../styles/main';
import form from '../../styles/form';
import axios from 'axios';
import * as NavigationService from '../../utils/NavigationService';
import { StackActions } from '@react-navigation/native';

class BoardDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Default title',
            note: 'Default note'
        }
    }

    componentDidMount = () => {
        axios.get('http://10.0.0.122:3000/boards/' + this.props.route.params.idx)
            .then(res => {
                if(res.status == 200 || res.status == 201) {
                    const data = res.data[0]
                    this.setState({
                        title: data.title,
                        note: data.note
                    })
                } else {
                    alert('데이터 호출 오류')
                }
            })
            .catch(err => {
                alert(err)
                NavigationService.goBack()
            })
    }

    boardUpdate = () => {
        axios.put('http://10.0.0.122:3000/boards/' + this.props.route.params.idx, {
            title: this.state.title,
            note: this.state.note
        })
            .then(res => {
                if(res.status == 200 || res.status == 201) {
                    alert("수정 성공")
                } else {
                    alert("수정 실패")
                }
            })
            .catch(err => {
                alert(err)
                NavigationService.goBack()
            })
    }

    boardDelete = () => {
        axios.delete('http://10.0.0.122:3000/boards/' + this.props.route.params.idx)
            .then(res => {
                if(res.status == 200 || res.status == 201) {
                    alert("삭제 성공")
                    const action = StackActions.pop(1)
                    this.props.navigation.dispatch(action)
                } else {
                    alert("삭제 실패")
                }
            })
            .catch(err => {
                alert(err)
                NavigationService.goBack()
            })
    }

    render() {
        return (
            <SafeAreaView style={main.container}>
                <View style={main.header}>
                    <Text style={main.title}>
                        Detail of {this.props.route.params.idx}
                    </Text>
                </View>
                <ScrollView>
                    <View style={form.form}>
                        <View style={form.inputGroup}>
                            <View style={form.label}>
                                <Text style={form.labelText}>제목</Text>
                            </View>
                            <TextInput
                                style={form.input}
                                onChangeText={title => this.setState({title})}
                                value={this.state.title}
                            />
                        </View>
                        <View style={form.inputGroup}>
                            <View style={form.label}>
                                <Text style={form.labelText}>내용</Text>
                            </View>
                            <TextInput
                                style={form.input}
                                onChangeText={note => this.setState({note})}
                                value={this.state.note}
                            />
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={[styles.button, styles.update]}
                        onPress={() => {
                            this.boardUpdate()
                        }}
                    >
                        <Text style={form.submitText}>수정</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.delete]}
                        onPress={() => {
                            this.boardDelete()
                        }}
                    >
                        <Text style={form.submitText}>삭제</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        padding: 10
    },
    button: {
        width: '45%',
        height: 50,
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    update: {
        backgroundColor: 'blue'
    },
    delete: {
        backgroundColor: 'red'
    }
})

export default BoardDetail
