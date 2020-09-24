import React, {Component} from 'react';
import axios from 'axios';
import {SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import * as NavigationService from '../../utils/NavigationService';
import ButtonToBack from '../navigations/ButtonToBack';
import main from '../../styles/main';

class BoardPut extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            note: ''
        }
    }

    boardPut = (params) => {
        axios.put('http://10.0.0.122:3000/boards', {
            title: params.title,
            note: params.note
        })
            .then(res => {
                if(res.status == 200 || res.status == 201) {
                    alert("성공")
                } else {
                    alert("실패")
                }
                NavigationService.navigate('Home')
            })
            .catch(err => alert(err));
    }

    render() {
        return (
            <SafeAreaView style={main.container}>
                <View style={main.header}>
                    <Text style={main.title}>등록 페이지</Text>
                </View>
                <ScrollView>
                    <View style={style.form}>
                        <View style={style.inputGroup}>
                            <View style={style.label}>
                                <Text style={style.labelText}>제목</Text>
                            </View>
                            <TextInput
                                style={style.input}
                                placeholder='제목을 입력해 주십시오.'
                                onChangeText={title => this.setState({title})}
                                value={this.state.title}/>
                        </View>
                        <View style={style.inputGroup}>
                            <View style={style.label}>
                                <Text style={style.labelText}>내용</Text>
                            </View>
                            <TextInput
                                style={style.input}
                                placeholder='내용을 입력해 주십시오.'
                                onChangeText={note => this.setState({note})}
                                value={this.state.note}
                            />
                        </View>
                        <TouchableOpacity
                            style={style.submit}
                            onPress={() => {
                                this.boardPut({
                                    title: this.state.title,
                                    note: this.state.note
                                })
                            }}
                        >
                            <Text style={style.submitText}>등록</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={{alignItems: 'center'}}>
                    <ButtonToBack/>
                </View>
            </SafeAreaView>
        );
    }
}

const style = StyleSheet.create({
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

export default BoardPut;
