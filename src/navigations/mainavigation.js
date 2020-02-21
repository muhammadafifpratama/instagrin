import React from 'react';
import Ssd from '../component/loginform';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../component/register';
import Drawernav from '../navigations/drawernave';

const Stack = createStackNavigator();

export default (props) => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            headerMode="none"
        >
            <Stack.Screen name="Login" component={Ssd} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="mainmenu" component={Drawernav} />
        </Stack.Navigator>
    );
};
