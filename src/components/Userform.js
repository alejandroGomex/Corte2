import React from "react";
import { ImageBackground,StyleSheet,Text,View,Modal} from "react-native";

export const Userform = (modalUserForm,setModalUserForm) => {
    return (
        <Modal animationType='slide' visible={modalUserForm}>
            <ImageBackground source={require("../assets/png/Logos_UAM-08.png")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Inside</Text>
            </ImageBackground>
        </Modal>
        );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        image: {
            justifyContent: 'center',
            position: 'absolute',
            marginTop: 0,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 0.5,
            backgroundColor: 'rgba(52,52,52,0.8)',
        },
        text: {
            color: 'white',
            fontSize: 42,
            lineHeight: 84,
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: '#000000c0',
        },
    });