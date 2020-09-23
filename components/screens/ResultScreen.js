import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import main from '../../styles/main';
import ButtonToNavi from '../navigations/ButtonToNavi';

const ResultScreen = ({route}) => {

    const { name } = route.params,
          { job  } = route.params,
          { etc  } = route.params;

    return (
        <SafeAreaView style={main.container}>
            <View style={main.header}>
                <Text style={main.title}>Result Page</Text>
            </View>
            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <View>
                        <Text>이름 : {JSON.stringify(name)}</Text>
                        <Text>직업 : {JSON.stringify(job)}</Text>
                        <Text>Etc : {JSON.stringify(etc)}</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{alignItems: 'center'}}>
                <ButtonToNavi navi={'Home'} />
            </View>
        </SafeAreaView>
    );
}

export default ResultScreen;
