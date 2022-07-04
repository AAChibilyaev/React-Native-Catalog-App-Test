import React from 'react';
import {Text, StyleSheet, View, Image, Button} from "react-native";


const Product = ({product}) => {
    return (
        <View>
            <Image style={styles.image} source={{uri: product.image,}}/>
            <Text> id: {product.id} </Text>
            <Text> Название: {product.name} </Text>
            <Text> Остаток: {product.stock} </Text>
            <Text> Стоимость: {product.price} </Text>
            <Text> Старая цена: {product.oldPrice} </Text>
            <Button color={'red'} title={'В корзину'} onPress={() => (console.log("Add Busket"))}/>
            <Button color={'red'} title={'Добавить в избранное'} onPress={() => (console.log("Add Favorite"))}/>
        </View>

    )
}

const styles = StyleSheet.create({
    image: {
        alignSelf: 'center',
        width: 300,
        height: 300
    },
})

export default Product
