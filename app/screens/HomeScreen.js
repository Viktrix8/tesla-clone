import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../components/Header';
import Background from "../../assets/background.png"
import AppText from '../components/AppText';
import MenuItem from '../components/MenuItem';

const heroIcons = [
    { id: 1, name: "fan" },
    { id: 2, name: "key" },
    { id: 3, name: "lock" },
]

const menuItems = [
    { id: 1, icon: "cellphone-key", title: "PHONE KEY", description: "Connected", chevron: false, opacity: false },
    { id: 2, icon: "music-note", title: "MEDIA", description: "", chevron: true, opacity: true },
    { id: 3, icon: "alarm", title: "SOFTWARE UPDATE", description: "Approximate 45 minutes to download", chevron: true, opacity: true },
    { id: 4, icon: "thermometer-low", title: "CLIMATE", description: "Interior 80°F", chevron: true, opacity: true },
    { id: 5, icon: "car", title: "CONTROLS", description: "", chevron: true, opacity: true },
    { id: 6, icon: "lightning-bolt", title: "CHARGING", description: "", chevron: true, opacity: true },
    { id: 7, icon: "map-marker", title: "LOCATION", description: "USA - Los Angels, Tesla Street", chevron: true, opacity: true },
    { id: 8, icon: "steering", title: "SUMMON", description: "", chevron: true, opacity: true },
]

export default function HomeScreen() {
    return (
        <ImageBackground source={Background} style={styles.background}>
            <View style={styles.hero}>
                <Header />

                <View style={styles.heroInfo}>
                    <View style={styles.batteryContainer}>
                        <Image resizeMode='contain' source={require("../../assets/battery.png")} style={styles.battery} />
                        <AppText style={styles.batteryText}>
                            <AppText style={styles.batteryMiles}>178</AppText>
                            mi</AppText>
                    </View>
                    <AppText style={styles.carStatus}>Parked</AppText>

                </View>
                <View style={styles.actionIconsContainer}>
                    {heroIcons.map(icon => (
                        <TouchableOpacity key={icon.id} style={styles.heroIconContainer}>
                            <MaterialCommunityIcons name={icon.name} size={25} color="white" />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={styles.menuItemsContainer}>
                <FlatList
                    data={menuItems}
                    renderItem={({ item }) => <MenuItem item={item} />}
                    keyExtractor={item => item.id}
                />

            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    actionIconsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        paddingHorizontal: 70,
        position: "absolute",
        bottom: 30
    },

    background: {
        width: "100%",
        height: "100%",
        position: "relative",
        display: 'flex'
    },

    battery: {
        width: 150,
        height: 40,
    },

    batteryContainer: {
        display: "flex",
        width: '100%',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },

    container: {
        backgroundColor: "#000",
        flex: 1
    },

    batteryMiles: {
        fontWeight: "bold",
        fontSize: 40
    },

    batteryText: {
        fontSize: 25
    },

    carStatus: {
        fontWeight: 'bold',
        fontSize: 19
    },

    heroInfo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    hero: {
        height: "50%"
    },

    heroIconContainer: {
        borderColor: 'grey',
        borderWidth: 1,
        width: 50,
        height: 50,
        borderRadius: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    menuItemsContainer: {
        height: "50%",
        paddingHorizontal: 10
    },
})