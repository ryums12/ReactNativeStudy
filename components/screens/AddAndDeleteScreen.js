import {SafeAreaView, Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import React, {Component} from 'react';
import ButtonToBack from '../navigations/ButtonToBack';
import JustText from './aad/JustText';
import main from '../../styles/main';

class AddAndDeleteScreen extends Component {

    state = {
      arr: [15, 57, 80]
    };

    addComponent = () => {
        this.setState( prevState => ({
            arr: [...prevState.arr, Math.floor(Math.random() * 100)]
        }));
    }

    deleteComponent = num => {
        this.setState( prevState => ({
            arr: prevState.arr.filter(number => number != num)
        }));
    }

    render() {
        return (
            <SafeAreaView style={main.container}>
                <View style={main.header}>
                    <Text style={main.title}>
                        Add Component
                    </Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.add}
                        onPress={() => {
                            this.addComponent()
                        }}>
                        <Text style={styles.add_text}>Add Component</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{alignItems: 'center'}}>
                        <JustText arr={this.state.arr} delete={this.deleteComponent} />
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
   add: {
       height: 70,
       backgroundColor: 'red',
       alignItems: 'center',
       justifyContent: 'center',
       borderRadius: 30
   },
   add_text: {
       color: 'white',
       fontSize: 30,
       fontWeight: 'bold'
   },
   comp_text: {
       width: '100%',
       height: 30,
       backgroundColor: 'gray',
       marginTop: 10,
       alignItems: 'center',
       justifyContent: 'center'
   },
   comp_text_text: {
       color: 'white',
       fontWeight: 'bold'
   }
});

export default AddAndDeleteScreen;
