import { StyleSheet, View, TouchableOpacity, Platform, } from 'react-native'
import { useNetInfo } from "@react-native-community/netinfo";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from "./AppText"



export default function Header({ settings, carName }) {
    const netInfo = useNetInfo()

    return (
        <>
            {!netInfo.isInternetReachable &&
                <View style={styles.internetContainer}>
                    <AppText style={styles.internet}>No internet connection</AppText>
                </View>
            }
            <View style={styles.container}>

                <View style={styles.headerItems}>

                    <TouchableOpacity onPress={settings}>
                        <Ionicons name="settings-sharp" size={30} color="white" />
                    </TouchableOpacity>

                    <AppText numberOfLines={1} style={styles.headerText}>{carName ? carName : "My Tesla"}</AppText>

                    <TouchableOpacity style={styles.hidden}>
                        <MaterialCommunityIcons name="" size={30} color="white" />
                    </TouchableOpacity>

                </View>
            </View>
        </>
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
    },

    internetContainer: {
        width: "100%",
        display: 'flex',
        height: 50,
        alignItems: "center",
        backgroundColor: "red",
        paddingTop: Platform.OS === 'ios' ? 60 : 20,
        position: 'absolute',
    },

    internet: {
        fontWeight: "bold",
        fontSize: 18,
        position: "absolute",
        bottom: 0
    }
})