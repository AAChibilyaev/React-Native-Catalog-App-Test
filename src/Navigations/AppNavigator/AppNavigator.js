import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Test1} from '../../Screens/'

const AppStack = createStackNavigator()

const AppNavigator = () => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} options={{headerShown: false,}}/>
            <AppStack.Screen name="Test1" component={Test1}/>
        </AppStack.Navigator>
    )
}

export default AppNavigator
