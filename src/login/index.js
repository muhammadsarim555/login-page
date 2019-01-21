import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, ImageBackground, StatusBar, TextInput, TouchableOpacity } from 'react-native';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    componentDidMount() {
        StatusBar.setHidden(true);
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground source={require('../../assets/bg.jpg')}
                    style={{
                        width: '100%', height: '70%'
                    }}
                >
                </ImageBackground>

                <View style={{ justifyContent: 'center', alignItems: 'center', width: '80%' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Image source={require('../../assets/man.png')} style={{ width: 20, height: 20, flexWrap: 'wrap', marginRight: 50 }} />
                        <TextInput
                            style={{ height: 40, width: '60%', borderColor: 'lightgray', borderWidth: 1 }}
                            onChangeText={(text) => this.setState({ text })}
                            value='  sarim123@gmail.com  '
                        />
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50, flexWrap: 'wrap' }}>
                        <Image source={require('../../assets/lock.png')} style={{ width: 20, height: 20, flexWrap: 'wrap', marginRight: 50 }} />
                        <TextInput
                            secureTextEntry={true}
                            style={{ height: 40, width: '60%', borderColor: 'lightgray', borderWidth: 1, padding: 5 }}
                            onChangeText={(text) => this.setState({ text })}
                            value='s1arim1231234511'
                        />
                    </View>
                </View>

                <View style={{ marginTop: 50, borderRadius: 20, backgroundColor: 'orange', width: '60%', height: 40, color: 'white' }}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 80 }}>
                        <Text>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
