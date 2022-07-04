import React from "react";
import {products} from './../../Services/ExampleData'
import {Text, StyleSheet, TouchableOpacity, FlatList, View, Image, Button} from "react-native";

const ProductsList = ({navigation}) => {
    const productClick = (id) => console.log(id)
    const renderItem = ({item}) => (
        <View style={styles.wrap}>
            <TouchableOpacity
                style={styles.item}
                onPress={() => (productClick(item.id))}>
                <Image style={styles.image} source={{uri: item.image,}}/>
                <Text bold style={styles.name}>{item.name}  </Text>
                <Text style={styles.stock}>{item.stock}  </Text>
                <Text style={styles.price}>Стоимость: {item.price} руб </Text>
                <Text style={styles.oldPrice}>Старая цена: {item.oldPrice} руб </Text>
            </TouchableOpacity>
            <Button color={'red'} title={'В корзину'} onPress={() => (console.log("Add Busket"))}/>
            <Button color={'red'} title={'Добавить в избранное'} onPress={() => (console.log("Add Favorite"))}/>
        </View>
    );
    return (
        <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
        />
    )
}
const styles = StyleSheet.create({
    wrap: {
        width: 193,
        padding: 0,
        margin: 1,
        borderColor: '#313131',
        borderWidth: 1
    },
    item: {
        padding: 1,
        alignSelf: 'center',
    },
    image: {
        borderColor: '#313131',
        borderWidth: 1,
        alignSelf: 'center',
        width: 190,
        height: 190
    },
    name: {
        fontSize: 14,
        textAlign: 'left'
    },
    stock: {
        // padding: 10,
        // backgroundColor: 'green'
    },
    price: {},
    oldPrice: {},


})
export default ProductsList
