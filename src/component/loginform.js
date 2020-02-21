import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon, Input, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Loginform extends Component {
    state = { email: '', password: '', hidePassword: true }

    btnlogin = () => {
        
    }

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
                        onChangeText={(res) => this.setState({ email: res })} />
                    <Input
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='black'
                            />
                        }
                        rightIcon={
                            <Icon
                                name={this.state.hidePassword ? 'visibility-off' : 'visibility'}
                                size={24}
                                color={this.state.hidePassword ? '#bfc3c9' : 'black'}
                                onPress={() => this.setState({ hidePassword: !this.state.hidePassword })}
                            />
                        }
                        value={this.state.password}
                        onChangeText={(val) => this.setState({ password: val })}
                        secureTextEntry={this.state.hidePassword}
                    />
                </View>
                <Button title="login"
                    containerStyle={{ width: "100%", marginBottom: 10 }}
                    buttonStyle={{ backgroundColor: "black" }}
                    onPress={() => this.props.navigation.navigate('mainmenu')}
                />
                <Button title="register"
                    containerStyle={{ width: "100%", marginBottom: 10 }}
                    onPress={() => this.props.navigation.navigate('Register')}
                />
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
