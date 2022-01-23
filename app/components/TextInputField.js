import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import AppText from './AppText'

export default function TextInputField({ placeholder, keyboard, autocomplete, focus, hidden, spellCheck, onChangeText, error, onBlur, value }) {
    return (
        <>
            <View style={styles.container}>
                <TextInput
                    placeholder={placeholder}
                    keyboardType={keyboard}
                    autoFocus={focus}
                    autoCapitalize='none'
                    autoComplete={autocomplete}
                    placeholderTextColor='grey'
                    style={styles.input}
                    secureTextEntry={hidden}
                    spellChech={spellCheck}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    value={value}
                />
            </View>
            {error && <AppText style={styles.error}>{error}</AppText>}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderBottomColor: 'grey',
        display: 'flex',
        alignItems: "center",
        marginTop: 50,
    },

    input: {
        marginBottom: 10,
        color: '#fff'
    },

    error: {
        color: "red"
    }
})