import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Camera } from "expo-camera";

const CameraScreen = ({route, navigation}) => {

    const {cardId, rowNum} = route.params;
    const [hasPerms, setHasPerms] = useState(null);
    const getPerms = async () => {
        const {status} = await Camera.requestCameraPermissionsAsync();
        setHasPerms(status == "granted");
    };

    useEffect(() => {
        getPerms();
    }, []);

    if (hasPerms === null) {
        return <Text style = {[styles.textStyle, {color: "black"}]} >Awaiting Permission</Text>
    }

    if (hasPerms === false) {
        return <Text style = {[styles.textStyle, {color: "black"}]} >Access Denied!</Text>
    }

    let camera;
    const getPic = async () => {
        if (camera) {
            const newPhoto = await camera.takePictureAsync();
            navigation.navigate("Photo", {cardId: cardId, rowNum: rowNum, uri: newPhoto.uri});
        }
    }

    return (
        <View style = {styles.container}>
            <Camera style = {styles.subContainer} ref = {(ref) => { camera = ref }} >
                <Button title = "Capture Image" onPress = {() => {
                    getPic();
                }}>
                </Button>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        flex: 1,
        alignItems: "center",
        padding: 70,
        justifyContent: "flex-end"
    },
    textStyle: {
        fontSize: 24,
        margingBottom: 15,
        color: "yellow",
        margin: 70,
        padding: 10,
        backgroundColor: "blue"
    }
});


export default CameraScreen;