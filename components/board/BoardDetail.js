import React from 'react';
import {SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import main from '../../styles/main';
import form from '../../styles/form';

const BoardDetail = ({route}) => {

    const idx = route.params.idx;
    const [title, setTitle] = React.useState('Default title');
    const [note, setNote] = React.useState('Default note');

    return (
        <SafeAreaView style={main.container}>
            <View style={main.header}>
                <Text style={main.title}>
                    Detail of {JSON.stringify(idx)}
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
                            placeholder='제목을 입력해 주십시오.'
                            onChangeText={title => setTitle(title)}
                            value={title}/>
                    </View>
                    <View style={form.inputGroup}>
                        <View style={form.label}>
                            <Text style={form.labelText}>내용</Text>
                        </View>
                        <TextInput
                            style={form.input}
                            placeholder='내용을 입력해 주십시오.'
                            onChangeText={note => setNote(note)}
                            value={note}
                        />
                    </View>
                    {/*<TouchableOpacity*/}
                    {/*    style={form.submit}*/}
                    {/*    onPress={() => {*/}
                    {/*        this.boardPut({*/}
                    {/*            title: this.state.title,*/}
                    {/*            note: this.state.note*/}
                    {/*        })*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <Text style={form.submitText}>등록</Text>*/}
                    {/*</TouchableOpacity>*/}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default BoardDetail;
