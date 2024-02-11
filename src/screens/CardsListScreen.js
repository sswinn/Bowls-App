import { View, Text, StyleSheet, Button, FlatList, Pressable } from "react-native";
import { useEffect, useContext } from "react";
import CardContext from "../contexts/CardContext";
import CreateCard from "../components/CreateCard";
import {MaterialIcons} from "@expo/vector-icons";

const CardsScreen = ({navigation}) =>
{
    const { state, removeCard } = useContext(CardContext);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <CreateCard navigation = {navigation}/>
            )
        })
    });

    const emptyTeam = (team) => {
        if(team == "" || team == null) return "Unnamed Team";
        else return team;
    }

    const emptyComp = (comp) => {
        if(comp == "" || comp == null) return "NEW SCORE CARD";
        else return comp;
    }

    return (
        <View>
            <FlatList
                inverted
                data = {state}
                keyExtractor = {(item) => item.cardId.toString()}
                renderItem = {({item}) => {
                    return (
                        <Pressable onPress = {() => 
                            navigation.navigate("ViewCard", {
                                cardId: item.cardId,
                            })
                        }>
                            <View style = {{backgroundColor: "oldlace", marginTop: 30, borderWidth: 1}}>
                                <View style = {[styles.itemContainer, {backgroundColor: "gainsboro", display: "flex", flexDirection: "row"}]}>
                                    <Text style = {[styles.textLabel, {paddingHorizontal: 20, flex: 2, fontWeight: "bold"}]}>
                                        {emptyComp(item.comp)}
                                    </Text>
                                    <View style = {{flex: 1, justifyContent: "flex-end"}}>
                                        <Text style = {[styles.textLabel, {fontWeight: "bold", color: "gray"}]}>
                                            {new Date(item.date).toLocaleDateString()}
                                        </Text>
                                    </View>
                                </View>
                                <View style = {
                                    [styles.itemContainer, {display: "flex", flexDirection: "row"}]
                                }> 
                                    <View style = {[styles.itemContainer, {width: "40%"}]}>
                                        <Text style = {[styles.textLabel, {color: "blue"}]}>
                                            {emptyTeam(item.teamOne.T1name)}
                                        </Text>
                                        <Text style = {[styles.textLabel]}>
                                            {item.rowsArr[30].leftTotal}
                                        </Text>
                                    </View>
                                    <View style = {[styles.itemContainer, {width: "10%"}]}>
                                    <Text style = {[styles.textLabel, {color: "black"}]}>vs.</Text>
                                    </View>
                                    <View style = {[styles.itemContainer, {width: "40%"}]}>
                                        <Text style = {[styles.textLabel, {color: "red"}]}>
                                            {emptyTeam(item.teamTwo.T2name)}
                                        </Text>
                                        <Text style = {[styles.textLabel]}>
                                            {item.rowsArr[30].rightTotal}
                                        </Text>
                                    </View>
                                    <Pressable
                                        style = {{width: "10%"}}
                                        onPress = {() => {
                                            removeCard(item.cardId);
                                        }}
                                    >
                                        <MaterialIcons name = "delete" size = {38} color = "black" />
                                    </Pressable>
                                </View>
                                <Pressable onPress = {() => 
                                    navigation.navigate("ViewCard", {
                                        cardId: item.cardId,
                                    })}
                                    style = {styles.pressableStyle}>
                                    <Text style = {{fontSize: 15}}>TAP TO VIEW AND EDIT THIS SCORE CARD</Text>
                                </Pressable>
                            </View>

                        </Pressable>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        alignItems: "center",
    },
    textInput: {
        fontSize: 20,
        borderWidth: 1,
    },
    textLabel: {
        fontSize: 18,
    },
    pressableStyle: {
        padding: 5, 
        alignItems: "center", 
        backgroundColor: "darkseagreen"
    }
});

export default CardsScreen;