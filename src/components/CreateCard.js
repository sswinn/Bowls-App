import { View, StyleSheet, Button, } from "react-native";
import { useContext } from "react";
import CardContext from "../contexts/CardContext";

const CreateCard = ({navigation}) => 
{

    const {createCard} = useContext(CardContext);

    return (
        <View>

            <Button
                title = "Create new card"
                onPress = {() => {

                    let cardId = Math.floor(Math.random() * 9999 + 1);

                    let rowsArr = [];

                    for (let i = 1; i <= 31; i++) {
                        let row = {
                            rowNum: i,
                            leftScore: 0, 
                            rightScore: 0,
                            leftTotal: 0,
                            rightTotal: 0,
                            photo: null
                        };

                        rowsArr.push(row);

                    };    

                    let teamOne = {
                        T1name: "",
                        T1P2: "",
                        T1P2: "",
                        T1P3: "",
                        T1P4: ""
                    };

                    let teamTwo = {
                        T2name: "",
                        T2P1: "",
                        T2P2: "",
                        T2P3: "",
                        T2P4: ""
                    };

                    createCard(cardId, "", new Date(), "", teamOne, teamTwo, rowsArr, (id) => {
                        navigation.navigate("ViewCard", {cardId: id});
                    });
                    
            }}/>

        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        textAlign: "center",
        height: 50,
        fontSize: 20,
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    itemContainer: {
        flexDirection: "row",
        width: "100%"
    }
});

export default CreateCard;