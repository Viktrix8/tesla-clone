import { StyleSheet, View, Image, Button, TextInput } from 'react-native'
import { useState } from 'react';
import { Formik } from 'formik';
import TextInputField from '../components/TextInputField';
import * as Yup from 'yup';
import AppText from '../components/AppText';

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email!").required("Email is required!").label("Email"),
    password: Yup.string().min(6, "Password is too short!").required("Password is required!").label("Password")
})

export default function AuthenticationScreen({ handleLogin, authError }) {

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require("../../assets/tesla-logo.png")} style={styles.logo} />
            </View>

            <Formik initialValues={{ email: "", password: "" }} validationSchema={validationSchema}
                onSubmit={async (values, actions) => {
                    handleLogin(values, actions)
                }}
            >
                {({ values, handleChange, errors, handleBlur, touched, isSubmitting, handleSubmit, initialValues }) => {
                    return <>
                        {authError && <AppText style={{ color: "red" }}>{authError === 'Firebase: Error (auth/user-not-found).' ? 'Invalid Credentials' : authError}</AppText>}
                        <TextInputField
                            placeholder="Email"
                            keyboard='email-address'
                            autocomplete="email"
                            error={touched.email && errors.email}
                            focus
                            value={values.email}
                            onBlur={handleBlur("email")}
                            onChangeText={handleChange('email')}
                            spellCheck="email" />

                        <TextInputField
                            placeholder="Password"
                            autocomplete='password'
                            error={touched.password && errors.password}
                            onBlur={handleBlur("password")}
                            onChangeText={handleChange('password')}
                            hidden={true}
                            value={values.password}
                            spellCheck="email" />

                        <View style={styles.buttonContainer}>
                            <Button title='Log In' disabled={errors.email || errors.password ? true : false} onPress={handleSubmit} />
                        </View>
                    </>
                }}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 20,
    },

    container: {
        backgroundColor: "#000",
        flex: 1,
        paddingHorizontal: 20,
        position: "relative"
    },

    logo: {
        width: 100,
        height: 100
    },

    logoContainer: {
        width: '100%',
        height: '30%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})