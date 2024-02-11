import React from "react";
import {View, Image, StyleSheet, Button} from "react-native";

const PhotoScreen = ({route, navigation}) => {
    const {cardId, rowNum, uri} = route.params;
    
    return (
        <View style = {styles.container}>
            <Image style = {styles.imageStyle} source = {{uri: uri}} />
            <Button style = {styles.button} title = "Delete Image" onPress = { () => navigation.navigate("ViewCard", {cardId: cardId, rowNum: rowNum, uri: ""})}></Button>
            <Button style = {styles.button} title = "Confirm Image" onPress = { () => navigation.navigate("ViewCard", {cardId: cardId, rowNum: rowNum, uri: uri})}></Button>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center"
    },
    imageStyle: {
        height: "75%",
        width: "75%"
    },
    button: {
        width: "50%"
    }
});

export default PhotoScreen;