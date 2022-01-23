import React from 'react'
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from "./AppText"

export default function Header() {
    return (
        <View style={styles.container}>

            <View style={styles.headerItems}>

                <TouchableOpacity>
                    <Ionicons name="settings-sharp" size={30} color="white" />
                </TouchableOpacity>

                <AppText style={styles.headerText}>My Model S</AppText>

                <TouchableOpacity style={styles.hidden}>
                    <MaterialCommunityIcons name="" size={30} color="white" />
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'ios' ? 60 : 20,
    },
    headerItems: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 18,
    },
    hidden: {
        width: 30,
        height: 30
    }
})