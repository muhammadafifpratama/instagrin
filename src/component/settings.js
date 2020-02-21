import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Setting extends Component {
    state = {}
    render() {
        return (
            <View style={style.containerstyle}>
                <Text>
                    gome
            </Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    containerstyle: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default Setting;
