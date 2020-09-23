import {SafeAreaView, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import ButtonToBack from '../navigations/ButtonToBack';
import JustText from '../add/JustText';

class DetailScreen extends Component {

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
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
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
                    <JustText arr={this.state.arr} delete={this.deleteComponent} />
                </View>
                <View style={styles.footer}>
                    <ButtonToBack />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
   },
   header: {
       height: 75,
       alignItems: 'center',
       justifyContent: 'center'
   },
   title: {
       fontSize: 24,
       fontWeight: 'bold'
   },
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
   },
   footer: {
       position: 'absolute',
       bottom: 0,
       width: '100%',
       alignItems: 'center'
   }
});

export default DetailScreen;
