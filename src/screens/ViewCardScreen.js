import { View, Text, StyleSheet, TextInput, Button, FlatList, Pressable } from "react-native";
import React, { useEffect, useState, useReducer, useContext } from "react";
import CardRow from "../components/CardRow";
import GameDetails from "../components/GameDetails";
import CardContext from "../contexts/CardContext";

const NewCardScreen = ({route, navigation}) => 
{

    const {state, updateCard} = useContext(CardContext);
    const {cardId, rowNum, uri} = route.params;
    const currentCard = state.find((item) => item.cardId === cardId)

    const photoFunc = (thisItem) => {
        if (thisItem.rowNum == rowNum) {
            return uri;
        }
        else return thisItem.photo;
    }

    return (

        <View style={[styles.container, {flex: 1}]}> 

            <GameDetails
                navigation = {navigation}
                currentCard = {currentCard}
            />

            <View style={styles.titleContainer}>
                <Text style = {[styles.title, {backgroundColor: "blue"}]}>Shots</Text>
                <Text style = {[styles.title, {backgroundColor: "blue"}]}>Total</Text>
                <Text style = {[styles.title, {backgroundColor: "black"}]}>End</Text>
                <Text style = {[styles.title, {backgroundColor: "red"}]}>Shots</Text>
                <Text style = {[styles.title, {backgroundColor: "red"}]}>Total</Text>
                <Text style = {[styles.title, {fontWeight: "normal", backgroundColor: "gray"}]}>Image</Text>
            </View>
            
            <FlatList
                data = {currentCard.rowsArr}
                keyExtractor = {(item) => item.rowNum}
                renderItem = {({item}) => 
                {
                    return (
                        <CardRow 
                            currentCard = {currentCard}
                            rowNum = {item.rowNum}
                            leftScore = {item.leftScore}
                            rightScore = {item.rightScore}
                            leftTotal = {item.leftTotal}
                            rightTotal = {item.rightTotal}
                            photo = {photoFunc(item)}
                            navigation = {navigation}
                        />
                    );
                }}
            />
            <Text style = {styles.messageStyle}>SCROLL TO SEE MORE ENDS</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 30, 
        fontWeight: 'bold', 
        color: 'green'
    },
    nameText: {
        fontSize: 20, 
        color: 'blue',
        marginTop: 10
    },
    img: {
        width: 250, 
        height: 250
    },
    itemContainer: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        padding: 5,
        marginVertical: 5,
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
        flex: 1,
        color: "white"
    },
    titleContainer: {
        flexDirection: "row",
        width: "100%"
    },
    messageStyle: {
        padding: 5, 
        alignItems: "center", 
        backgroundColor: "darkseagreen",
        fontSize: 15,
        width: "100%",
        textAlign: "center"
    }
});


export default NewCardScreen;