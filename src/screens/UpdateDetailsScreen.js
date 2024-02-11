import { useContext, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CardContext from "../contexts/CardContext";

const UpdateDetailsScreen = () => 
{

    const {state} = useContext(CardContext);
    const [comp, setComp] = useState("");
    const [date, setDate] = useState(new Date());
    const [rinkNo, setRinkNo] = useState("");
    const [teamOne, setTeamOne] = useState("");
    const [teamTwo, setTeamTwo] = useState("");
    const [T1P1, setT1P1] = useState("");
    const [T1P2, setT1P2] = useState("");
    const [T1P3, setT1P3] = useState("");
    const [T1P4, setT1P4] = useState("");
    const [T2P1, setT2P1] = useState("");
    const [T2P2, setT2P2] = useState("");
    const [T2P3, setT2P3] = useState("");
    const [T2P4, setT2P4] = useState("");

    return (
        <View>
            <View style = {styles.pairContainer}>
                <TextInput
                    style = {[styles.textInput, styles.bold, {flex: 1}]}
                    placeholder = "Competition Name Here"
                    value = {comp}
                    onChangeText = {(text) => {
                        setComp(text);
                        updateCard(currentCard.cardId);
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
                    placeholder = "Rink Number Here"
                    value = {rinkNo}
                    onChangeText = {(text) => {
                        setRinkNo(text);
                    }}
                >{new Date(date).toLocaleDateString()}</Text>

            </View>
            <View style = {styles.pairContainer}>
                <TextInput
                    style = {[styles.textInput, styles.teamOne, styles.bold]}
                    placeholder = "Team One Name Here"
                    value = {teamOne}
                    onChangeText = {(text) => {
                        setTeamOne(text);
                    }}
                />
                <TextInput
                    style = {[styles.textInput, styles.teamTwo, styles.bold]}
                    placeholder = "Team Two Name Here"
                    value = {teamTwo}
                    onChangeText = {(text) => {
                        setTeamTwo(text);
                    }}
                />
            </View>
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
    }
});

export default UpdateDetailsScreen;