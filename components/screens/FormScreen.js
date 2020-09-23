import React from 'react';
import {SafeAreaView, View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import main from '../../styles/main';
import ButtonToBack from '../navigations/ButtonToBack';
import * as NavigationService from '../../utils/NavigationService';

const FormScreen = () => {

    const [name, onNameChange] = React.useState(),
          [job, onJobChange]   = React.useState(),
          [etc, onEtcChange]   = React.useState();

    return (
        <SafeAreaView style={main.container}>
            <View style={main.header}>
                <Text style={main.title}>Form Page</Text>
            </View>
            <ScrollView>
                <View style={style.form}>
                    <View style={style.inputGroup}>
                        <View style={style.label}>
                            <Text style={style.labelText}>이름</Text>
                        </View>
                        <TextInput
                            style={style.input}
                            placeholder='이름을 입력해 주십시오.'
                            onChangeText={name => onNameChange(name)}
                            value={name}/>
                    </View>
                    <View style={style.inputGroup}>
                        <View style={style.label}>
                            <Text style={style.labelText}>직업</Text>
                        </View>
                        <TextInput
                            style={style.input}
                            placeholder='직업을 입력해 주십시오.'
                            onChangeText={job => onJobChange(job)}
                            value={job}
                        />
                    </View>
                    <View style={style.inputGroup}>
                        <View style={style.label}>
                            <Text style={style.labelText}>뭐 적지</Text>
                        </View>
                        <TextInput
                            style={style.input}
                            placeholder='뭐 적지'
                            onChangeText={etc => onEtcChange(etc)}
                            value={etc}
                        />
                    </View>
                    <TouchableOpacity
                        style={style.submit}
                        onPress={() => {
                            NavigationService.navigate('Result', {
                                name: name,
                                job: job,
                                etc: etc
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

export default FormScreen;
