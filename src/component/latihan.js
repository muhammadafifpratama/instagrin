import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import * as Animatable from 'react-native-animatable';

const Headertext = (props) => {
    return (
        <Text>beo</Text>
    );
};

class App extends Component {
    render() {
        return (
            <View>
                <Animatable.View animation="tada" duration={5000} iterationCount={10}>
                    <Header
                        placement="left"
                        leftComponent={{
                            icon: 'md-home',
                            type: 'ionicon',
                            color: '#fff',
                        }}
                        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                        rightComponent={{ icon: 'home', color: '#fff' }}
                    />
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://pics.me.me/thumb_aaaaaaaaaaaaaaaaaaaaaaaaaaaaa-aaaaaaaaaaaaaaaaaaaaaaaaaaaaa-aaaaaaaaaaaaaaaaaaaaaaaaaaaaa-aaa-aaaaa-aaaaaaaaaaaaaaa-aaaaaa-naaaaaaaaaaaaaaaaaaaaaaaaaa-49432564.png' }} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://pbs.twimg.com/media/DrZTW4kXQAIbAGq.jpg' }} style={{ height: 250, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Comments</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Animatable.View>
            </View>
        );
    }
}
export default App;
