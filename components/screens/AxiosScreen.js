import React, {Component} from 'react';
import {SafeAreaView, Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import main from '../../styles/main';
import ButtonToBack from '../navigations/ButtonToBack';
import axios from 'axios';

class AxiosScreen extends Component {

    state = {
        id: '',
        name: '',
        salary: '',
        age: ''
    }

    getData = () => {
        axios.get('http://dummy.restapiexample.com/api/v1/employee/1')
            .then(res => {
                return res.data.data
            })
            .then(data => {
                this.setState(({
                    id: data.id,
                    name: data.employee_name,
                    salary: data.employee_salary,
                    age: data.employee_age
                }));
            })
            .catch(err => {
                alert(err);
            })
    }

    render() {
        return (
            <SafeAreaView style={main.container}>
                <View style={main.header}>
                    <Text style={main.title}>
                        Axios Test Page
                    </Text>
                </View>
                <ScrollView>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.getData();
                        }}
                    >
                        <Text style={styles.buttonText}>통신</Text>
                    </TouchableOpacity>
                    <View style={{alignItems: 'center'}}>
                        <Text>id : {this.state.id}</Text>
                        <Text>name : {this.state.name}</Text>
                        <Text>salary : {this.state.salary}</Text>
                        <Text>age : {this.state.age}</Text>
                    </View>
                </ScrollView>
                <View style={{alignItems: 'center'}}>
                    <ButtonToBack />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 75,
        backgroundColor: 'blue',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default AxiosScreen;
