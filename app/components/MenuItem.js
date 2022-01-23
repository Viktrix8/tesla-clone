import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from '../components/AppText';
import { TouchableWithoutFeedback } from 'react-native-web';

export default function MenuItem({ item }) {
    return (
        <TouchableWithoutFeedback>
            <>
                {item.opacity &&
                    <TouchableOpacity style={styles.menuItem} onPress={item.action}>
                        <View style={styles.menuItemIcon}>
                            <MaterialCommunityIcons name={item.icon} size={35} color="white" />
                        </View>

                        <View style={styles.menuItemText}>
                            <AppText style={[styles.menuItemTitle, item.description === "" ? { marginTop: 8 } : {}]}>{item.title}</AppText>
                            {item.description !== ""
                                && <AppText style={styles.menuItemDescription}>{item.description}</AppText>}
                        </View>
                        <View>
                            {item.chevron && (
                                <MaterialCommunityIcons name="chevron-right" color="lightgrey" size={40} />
                            )}
                        </View>
                    </TouchableOpacity>
                }
                {!item.opacity &&
                    <View style={styles.menuItem} onPress={item.action}>
                        <View style={styles.menuItemIcon}>
                            <MaterialCommunityIcons name={item.icon} size={35} color="white" />
                        </View>

                        <View style={styles.menuItemText}>
                            <AppText style={[styles.menuItemTitle, item.description === "" ? { marginTop: 8 } : {}]}>{item.title}</AppText>
                            {item.description !== ""
                                && <AppText style={styles.menuItemDescription}>{item.description}</AppText>}
                        </View>
                        <View>
                            {item.chevron && (
                                <MaterialCommunityIcons name="chevron-right" color="lightgrey" size={40} />
                            )}
                        </View>
                    </View>
                }
            </>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({

    menuItem: {
        height: 75,
        display: "flex",
        flexDirection: "row",
    },

    menuItemTitle: {
        fontWeight: "bold"
    },

    menuItemIcon: {
        marginRight: 15,
    },

    menuItemDescription: {
        color: 'gray'
    },

    menuItemText: {
        flex: 1
    }
})