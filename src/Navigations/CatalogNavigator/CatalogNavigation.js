import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ProductsList, Test1} from '../../Screens/'

const CatalogNavigator = () => {
    const FavoriteStack = createStackNavigator()
    return (
        <FavoriteStack.Navigator>
            <FavoriteStack.Screen name="ProductsList" component={ProductsList}/>
        </FavoriteStack.Navigator>
    )
}

export default CatalogNavigator
