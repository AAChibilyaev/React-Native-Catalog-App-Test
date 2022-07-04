import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Test1} from '../../Screens/'

const FavoriteNavigator = ({navigation}) => {
    const FavoriteStack = createStackNavigator()
    return (
        <FavoriteStack.Navigator>
            <FavoriteStack.Screen name="Главная" component={Home}/>
            <FavoriteStack.Screen name="Test1" component={Test1}/>
        </FavoriteStack.Navigator>
    )
}

export default FavoriteNavigator
