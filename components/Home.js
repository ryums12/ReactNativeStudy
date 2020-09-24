import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import ButtonToNavi from './navigations/ButtonToNavi';
import main from '../styles/main';
import React from 'react';

const Home = () => {
    return (
        <SafeAreaView style={[main.container, styles.center]}>
            <View style={main.main}>
                <Text style={main.title}>
                    Home
                </Text>
                <ButtonToNavi navi={'Main'}/>
                <ButtonToNavi navi={'Put'}/>
                {/*<ButtonToNavi navi={'Axios'}/>*/}
                {/*<ButtonToNavi navi={'AaD'}/>*/}
                {/*<ButtonToNavi navi={'Form'}/>*/}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
   center: {
       alignItems: 'center',
       justifyContent: 'center'
   }
});

export default Home;
