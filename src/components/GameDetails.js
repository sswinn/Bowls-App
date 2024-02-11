import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CardContext from "../contexts/CardContext";



const GameDetails = ({navigation, currentCard}) => 
{
    const {updateCard} = useContext(CardContext);
    
    const [comp, setComp] = useState(currentCard.comp);
    const [date, setDate] = useState(currentCard.date);
    const [rinkNo, setRinkNo] = useState(currentCard.rinkNo);
    const [T1name, setT1name] = useState(currentCard.teamOne.T1name);
    const [T2name, setT2name] = useState(currentCard.teamTwo.T2name);
    const [T1P1, setT1P1] = useState(currentCard.teamOne.T1P1);
    const [T1P2, setT1P2] = useState(currentCard.teamOne.T1P2);
    const [T1P3, setT1P3] = useState(currentCard.teamOne.T1P3);
    const [T1P4, setT1P4] = useState(currentCard.teamOne.T1P4);
    const [T2P1, setT2P1] = useState(currentCard.teamTwo.T2P1);
    const [T2P2, setT2P2] = useState(currentCard.teamTwo.T2P2);
    const [T2P3, setT2P3] = useState(currentCard.teamTwo.T2P3);
    const [T2P4, setT2P4] = useState(currentCard.teamTwo.T2P4);

    const teamOne = {
        T1name: T1name,
        T1P1: T1P1,
        T1P2: T1P2,
        T1P3: T1P3,
        T1P4: T1P4
    }

    const teamTwo = {
        T2name: T2name,
        T2P1: T2P1,
        T2P2: T2P2,
        T2P3: T2P3,
        T2P4: T2P4
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button 
                    title = "Save Changes"
                    onPress = {() => {
                        updateCard(currentCard.cardId, comp, date, rinkNo, teamOne, teamTwo, currentCard.rowsArr);
                }}/>
            )
        })
    });

    const [playerFieldsToggle, setToggle] = useState(true);
    let toggleText;

    const playerFields = () => {

        if (playerFieldsToggle === true) {

            toggleText = "△ TAP TO HIDE PLAYER NAMES △";

            return (
                <View>
                    <View style = {styles.pairContainer}>
                        <TextInput
                            style = {[styles.textInput, styles.teamOne]}
                            placeholder = "Player Name Here"
                            value = {T1P1}
                            onChangeText = {(text) => {
                                setT1P1(text);
                            }}
                        />
                        <TextInput
                            style = {[styles.textInput, styles.teamTwo]}
                            placeholder = "Player Name Here"
                            value = {T2P1}
                            onChangeText = {(text) => {
                                setT2P1(text);
                            }}
                        />
                    </View>
                    <View style = {styles.pairContainer}>
                        <TextInput
                            style = {[styles.textInput, styles.teamOne]}
                            placeholder = "Player Name Here"
                            value = {T1P2}
                            onChangeText = {(text) => {
                                setT1P2(text);
                            }}
                        />
                        <TextInput
                            style = {[styles.textInput, styles.teamTwo]}
                            placeholder = "Player Name Here"
                            value = {T2P2}
                            onChangeText = {(text) => {
                                setT2P2(text);
                            }}
                        />
                    </View>
                    <View style = {styles.pairContainer}>
                        <TextInput
                            style = {[styles.textInput, styles.teamOne]}
                            placeholder = "Player Name Here"
                            value = {T1P3}
                            onChangeText = {(text) => {
                                setT1P3(text);
                            }}
                        />
                        <TextInput
                            style = {[styles.textInput, styles.teamTwo]}
                            placeholder = "Player Name Here"
                            value = {T2P3}
                            onChangeText = {(text) => {
                                setT2P3(text);
                            }}
                        />
                    </View>
                    <View style = {styles.pairContainer}>
                        <TextInput
                            style = {[styles.textInput, styles.teamOne]}
                            placeholder = "Player Name Here"
                            value = {T1P4}
                            onChangeText = {(text) => {
                                setT1P4(text);
                            }}
                        />
                        <TextInput
                            style = {[styles.textInput, styles.teamTwo]}
                            placeholder = "Player Name Here"
                            value = {T2P4}
                            onChangeText = {(text) => {
                                setT2P4(text);
                            }}
                        />
                    </View>
                </View>
        )}
        else toggleText = "▽ TAP TO SHOW PLAYER NAMES ▽";
    }

    return (
        <View>
            <View style = {styles.pairContainer}>
                <TextInput 
                    style = {[styles.textInput, styles.bold, {flex: 1}]}
                    placeholder = "Competition Name Here"
                    value = {comp}
                    onChangeText = {(text) => {
                        setComp(text);
                    }}
                />
                
            </View> 
            <View style = {styles.pairContainer}>
                <TextInput
                    style = {styles.textInput}
                    placeholder = "Rink Number Here"
                    value = {rinkNo}
                    onChangeText = {(text) => {
                        setRinkNo(text);
                    }}
                />

                <Text
                    style = {styles.textInput}
                >{new Date(date).toLocaleDateString()}</Text>

            </View>
            <View style = {styles.pairContainer}>
                <TextInput
                    style = {[styles.textInput, styles.teamOne, styles.bold]}
                    placeholder = "Team One Name Here"
                    value = {T1name}
                    onChangeText = {(text) => {
                        setT1name(text);
                    }}
                />
                <TextInput
                    style = {[styles.textInput, styles.teamTwo, styles.bold]}
                    placeholder = "Team Two Name Here"
                    value = {T2name}
                    onChangeText = {(text) => {
                        setT2name(text);
                    }}
                />
            </View>
            {playerFields()}
            <Pressable style = {styles.pressableStyle} onPress ={ () => setToggle(!playerFieldsToggle) }>
                <Text style = {{fontSize: 15}}>{toggleText}</Text>
            </Pressable>
        </View>

    );
} 

const styles = StyleSheet.create({
    textInput: {
        textAlign: "center",
        height: 40,
        fontSize: 18,
        borderWidth: 1,
        padding: 0,
        margin: 2,
        flex: .5
    },
    bold: {
        borderWidth: 3
    },
    teamOne: {
        borderColor: "blue"
    },
    teamTwo: {
        borderColor: "red"
    },
    pairContainer: {
        flexDirection: "row",
        width: "100%"
    },
    pressableStyle: {
        padding: 5, 
        alignItems: "center", 
        backgroundColor: "darkseagreen"
    }
});

export default GameDetails;