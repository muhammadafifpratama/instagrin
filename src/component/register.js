import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { url } from '../helpers/apiurl';
import axios from 'axios';

class RegisterForm extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        conpassword: '',
        hidePassword: true,
        hideconpassword: true,
        btnloading: false,
        error: '',
    }

    onbtnpress = async () => {
        try {
            this.setState({ btnloading: true, error: '' });
            if (this.state.email !== '' && this.state.password !== '' && this.state.username !== '' && this.state.conpassword !== '') {
                if (this.state.password === this.state.conpassword) {
                    const res = await axios.post(url + '/user/register', {
                        email: this.state.email,
                        username: this.state.username,
                        password: this.state.password,
                    });
                    console.log(res.data);
                    this.setState({ btnloading: false });
                }
                else {
                    this.setState({ btnloading: false, error: 'password dan con tidak sama' });
                }
            }
            else { this.setState({ btnloading: false, error: 'asd' }); }
        }
        catch (eror) {
            this.setState({ btnloading: false, error: eror.response.data.message });
        }
    }

    render() {
        // console.log(this.props.route.params);
        return (
            <View style={styles.containerStyle}>
                <Animatable.Text animation={'fadeInDown'} duration={2000}>
                    <Text h3>Welcome!</Text>
                </Animatable.Text>
                <View style={styles.inputContainerStyle}>
                    <Input
                        placeholder="Email"
                        leftIcon={
                            <Icon
                                name="email"
                                size={24}
                                color="black"
                            />
                        }
                        value={this.state.email}
                        onChangeText={(val) => this.setState({ email: val })}
                    />
                    <Input
                        placeholder="Password"
                        leftIcon={
                            <Icon
                                name="lock"
                                size={24}
                                color="black"
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
                    <Input
                        placeholder="Username"
                        leftIcon={
                            <Icon
                                name="account-box"
                                size={24}
                                color="black"
                            />
                        }
                        value={this.state.username}
                        onChangeText={(val) => this.setState({ username: val.toLowerCase().replace(/\s/g, '') })}
                    />
                    <Input
                        placeholder="confirm password"
                        leftIcon={
                            <Icon
                                name="lock"
                                size={24}
                                color="black"
                            />
                        }
                        rightIcon={
                            <Icon
                                name={this.state.hideconPassword ? 'visibility-off' : 'visibility'}
                                size={24}
                                color={this.state.hideconPassword ? '#bfc3c9' : 'black'}
                                onPress={() => this.setState({ hideconPassword: !this.state.hideconPassword })}
                            />
                        }
                        value={this.state.conpassword}
                        onChangeText={(val) => this.setState({ conpassword: val })}
                        secureTextEntry={this.state.hideconPassword}
                    />
                </View>
                <Text style={{ color: 'red' }}>
                    {this.state.error}
                </Text>
                <Button
                    title="Register"
                    containerStyle={{ width: '95%', marginBottom: 10 }}
                    buttonStyle={{ borderColor: 'black', borderWidth: 1 }}
                    titleStyle={{ color: 'black' }}
                    type="outline"
                    onPress={this.onbtnpress}

                />
                <Button
                    title="Back to Login"
                    containerStyle={{ width: '95%' }}
                    buttonStyle={{ backgroundColor: 'black' }}
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    inputContainerStyle: {
        marginTop: 50,
        marginBottom: 100,
        width: '100%',
    },
});

export default RegisterForm;
