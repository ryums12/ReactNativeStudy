import React, {Component} from 'react';
import axios from 'axios';
import {SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import * as NavigationService from '../../utils/NavigationService';
import ButtonToBack from '../navigations/ButtonToBack';
import main from '../../styles/main';
import form from '../../styles/form';

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
                    <View style={form.form}>
                        <View style={form.inputGroup}>
                            <View style={form.label}>
                                <Text style={form.labelText}>제목</Text>
                            </View>
                            <TextInput
                                style={form.input}
                                placeholder='제목을 입력해 주십시오.'
                                onChangeText={title => this.setState({title})}
                                value={this.state.title}/>
                        </View>
                        <View style={form.inputGroup}>
                            <View style={form.label}>
                                <Text style={form.labelText}>내용</Text>
                            </View>
                            <TextInput
                                style={form.input}
                                placeholder='내용을 입력해 주십시오.'
                                onChangeText={note => this.setState({note})}
                                value={this.state.note}
                            />
                        </View>
                        <TouchableOpacity
                            style={form.submit}
                            onPress={() => {
                                this.boardPut({
                                    title: this.state.title,
                                    note: this.state.note
                                })
                            }}
                        >
                            <Text style={form.submitText}>등록</Text>
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

export default BoardPut;
