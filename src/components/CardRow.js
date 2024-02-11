import { useContext } from "react";
import { View, Text, StyleSheet, TextInput, Pressable} from "react-native";
import CardContext from "../contexts/CardContext";
import {MaterialIcons} from "@expo/vector-icons";


const CardRow = ({currentCard, rowNum, leftScore, rightScore, leftTotal, rightTotal, photo, navigation}) => 
{
    
    const cc = currentCard;
    const currRow = cc.rowsArr.find((item) => item.rowNum === rowNum);
    const currIndex = cc.rowsArr.findIndex((item) => item.rowNum === rowNum);
    const rowsArray = cc.rowsArr;
    const {updateCard} = useContext(CardContext);

    currRow.photo = photo;

    const checkNaN = (n1, n2) => {
        if(isNaN(parseInt(n1)) || n1 === "" || n1.length === 0) {
            if(n2 === "empty"){
                return 0;
            }
            else return 0 + parseInt(n2);
        }
        else {
            if(n2 === "empty"){
                return parseInt(n1);
            }
            else return parseInt(n1) + parseInt(n2);
        }
    }

    const findTotal = (thisLeftScore, thisRightScore) => {

        let newRows = [];
        let leftTemp = 0;
        let rightTemp = 0;

        rowsArray[currIndex].leftScore = thisLeftScore;
        rowsArray[currIndex].rightScore = thisRightScore;

        rowsArray.forEach((item, i) => {

            if (i == 0) 
            { 
                item.leftTotal = checkNaN(item.leftScore, "empty");
                item.rightTotal = checkNaN(item.rightScore, "empty");

            }
            else 
            {
                item.leftTotal = checkNaN(item.leftScore, leftTemp);
                item.rightTotal = checkNaN(item.rightScore, rightTemp);
            }

            newRows.push(item);
            leftTemp = parseInt(newRows[i].leftTotal);
            rightTemp = parseInt(newRows[i].rightTotal);

        });

        updateCard(cc.cardId, cc.comp, cc.date, cc.rinkNo, cc.teamOne, cc.teamTwo, newRows);
    }

    const viewAddPhoto = () => {
        if(photo) return ["photo", "green"]; else return ["add-a-photo", "black"];
    }

    const bottomPadding = () => {
        if(rowNum === 31) return 350;
        else return 0;
    }

    return (
        <View style = {[styles.itemContainer, {paddingBottom: bottomPadding()}]}>
            <TextInput 
                style = {[styles.textInput, {borderWidth: 3}]}
                keyboardType = "number-pad"
                placeholder = "-"
                value = {leftScore}
                maxLength = {1} //"The maximum score for an end is 9 shots." source: google
                onChangeText = {(text) => {
                    findTotal(text, 0);
                }}
            />
            <Text style = {styles.textInput}>{leftTotal}</Text>

            <Text style = {[styles.textInput, {borderWidth: 0}]}>
                {rowNum}
            </Text>

            <TextInput 
                style = {[styles.textInput, {borderWidth: 3}]}
                keyboardType = "number-pad"
                placeholder = "-"
                value = {rightScore}
                maxLength = {1} //"The maximum score for an end is 9 shots." source: google
                onChangeText = {(text) => {
                    findTotal(0, text);
                }}
            />
            <Text style = {styles.textInput}>{rightTotal}</Text>

            <Pressable  
                style = {[styles.textInput, {flexDirection: "row", backgroundColor: "gainsboro", borderWidth: 0.5}]}
                onPress = {() => {
                    if (photo) {
                        navigation.navigate("Photo", {cardId: currentCard.cardId, rowNum: rowNum, uri: photo});
                    }
                    else {
                        navigation.navigate("Camera", {cardId: currentCard.cardId, rowNum: rowNum});
                    }
                }}
            >
            
                {/*<Text style = {{textDecorationLine: "underline", color: viewAddPhoto()[1]}} >{viewAddPhoto()[0]}</Text>*/}
                
            
                <MaterialIcons name = {viewAddPhoto()[0]} size = {30} color = {viewAddPhoto()[1]} />
                

            </Pressable>

        </View>
    )

}

const styles = StyleSheet.create({
    textInput: {
        textAlign: "center",
        height: 50,
        width: "16.67%",
        fontSize: 20,
        borderWidth: 1,
        padding: 10
    },
    itemContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%"
    }
});


export default CardRow;