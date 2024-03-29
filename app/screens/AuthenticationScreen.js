import { StyleSheet, View, Image, Button, Platform } from 'react-native'
import { Formik } from 'formik';
import TextInputField from '../components/TextInputField';
import { useNetInfo } from "@react-native-community/netinfo";
import * as Yup from 'yup';
import AppText from '../components/AppText';

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email!").required("Email is required!").label("Email"),
    password: Yup.string().min(6, "Password is too short!").required("Password is required!").label("Password")
})

export default function AuthenticationScreen({ handleLogin, authError, loginMethod }) {
    const netInfo = useNetInfo()

    return (
        <>

            {!netInfo.isInternetReachable &&
                <View style={styles.internetContainer}>
                    <AppText style={styles.internet}>No internet connection</AppText>
                </View>
            }

            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require("../../assets/tesla-logo.png")} style={styles.logo} />
                </View>

                <Formik initialValues={{ email: "", password: "" }} validationSchema={validationSchema}
                    onSubmit={async (values, actions, type) => {
                        handleLogin(values, actions, type)
                    }}
                >
                    {(formikProps) => {
                        const { values, handleChange, errors, handleBlur, touched, isSubmitting, handleSubmit, initialValues } = formikProps
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
                                spellCheck="" />

                            <View style={styles.buttons}>
                                <View style={styles.buttonContainer}>
                                    <Button style={styles.login} title='Log In' disabled={errors.email || errors.password || isSubmitting || !netInfo.isInternetReachable ? true : false} onPress={() => {
                                        loginMethod("login")
                                        handleSubmit()
                                    }} />
                                </View>

                                <View style={styles.buttonContainer}>
                                    <Button title='Register' disabled={errors.email || errors.password || isSubmitting || !netInfo.isInternetReachable ? true : false} onPress={() => {
                                        loginMethod("register")
                                        handleSubmit()
                                    }} />
                                </View>
                            </View>
                        </>
                    }}
                </Formik>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 20,
    },

    buttons: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
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
    },

    internetContainer: {
        width: "100%",
        display: 'flex',
        height: 50,
        alignItems: "center",
        backgroundColor: "red",
        paddingTop: Platform.OS === 'ios' ? 60 : 20,
    },

    internet: {
        fontWeight: "bold",
        fontSize: 18,
        position: "absolute",
        bottom: 0
    },

})