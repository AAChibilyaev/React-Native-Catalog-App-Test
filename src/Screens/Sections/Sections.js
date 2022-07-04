import React from "react";
import {categories} from './../../Services/ExampleData'
import {Text, StyleSheet, TouchableOpacity, FlatList, View} from "react-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/'

const Sections = () => {
    const categoryClick = (id) => console.log(id)
    const renderItem = ({item}) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => (categoryClick(item.id))}>
            <Text>{item.name}  </Text>
            <FontAwesomeIcon icon={faChevronRight}/>
        </TouchableOpacity>
    );
    return (
        <FlatList
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: "#DDDDDD",
        padding: 20,
        borderBottomColor: '#313131',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'


    },
})
export default Sections
