import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppNavigator, CatalogNavigator, BusketNavigator, FavoriteNavigator} from "./src/Navigations";


const Tab = createBottomTabNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="AppNavigator" component={AppNavigator} options={{headerShown: false,}}/>
                <Tab.Screen name="CatalogNavigator" component={CatalogNavigator} options={{headerShown: false,}}/>
                <Tab.Screen name="FavoriteNavigator" component={FavoriteNavigator} options={{headerShown: false,}}/>
                <Tab.Screen name="BusketNavigator" component={BusketNavigator} options={{headerShown: false,}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default App
