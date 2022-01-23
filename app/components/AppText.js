import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Platform } from 'react-native';

export default function AppText({ children, style, ...rest }) {
    return (
        <Text style={[styles.text, style]} {...rest} >{children}</Text>
    )
}

const font = Platform.OS == 'ios' ? 'Avenir' : "Roboto"

const styles = StyleSheet.create({
    text: {
        fontFamily: font,
        fontSize: 16,
        color: "#fff"
    }
})