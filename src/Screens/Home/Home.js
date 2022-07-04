import React from 'react';
import {Text, Button} from "react-native";

const Home = ({navigation}) => {
    return (
        <>
            <Text> Главная страница 1 </Text>
            <Text> Главная страница 2 </Text>
            <Text> Главная страница 3 </Text>
            <Button title='Test1' onPress={() => navigation.navigate('Test1')}/>
        </>
    )
}

export default Home
