import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon, Input, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
class Loginform extends Component {
    state = {email: "",password: ""}
    render() {
        return (
            <View style={styles.containerstyle}>
                <Animatable.Text animation="tada" iterationCount={'infinite'}>
                    <Text h3>
                        ins
                </Text>
                </Animatable.Text>
                <View style={styles.imputcontainerstyle}>
                    <Input placeholder="email" leftIcon={
                        <Icon name="email" size={24} color="black" />
                    } 
                    value={this.state.email}
                    onChangeText={(res)=> this.setState({email: res})}/>
                    <Input placeholder="password" leftIcon={
                        <Icon name="lock" size={24} color="black" />
                    } />
                </View>
                <Button title="login" containerStyle={{ width: "100%", marginBottom: 10 }} buttonStyle={{ backgroundColor: "black" }} />
                <Button title="register" containerStyle={{ width: "100%", marginBottom: 10 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerstyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    imputcontainerstyle: {
        marginTop: 50,
        marginBottom: 100,
        width: '100%',
    },
});

export default Loginform;
