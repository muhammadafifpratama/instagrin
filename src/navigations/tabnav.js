import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../component/home';
import Profile from '../component/profile';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

export default (props) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Settings') {
                        iconName = 'account-box';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={35} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                showLabel: false,
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Profile} />
        </Tab.Navigator>
    );
};
