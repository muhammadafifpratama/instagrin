import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Setting from '../component/settings';
import tabnav from './tabnav'

const Drawer = createDrawerNavigator();

export default (props) => {
    return (
        <Drawer.Navigator initialRouteName="tabmenu">
            <Drawer.Screen name="tabmenu" component={tabnav} />
            <Drawer.Screen name="setting" component={Setting} />
        </Drawer.Navigator>
    );
};
