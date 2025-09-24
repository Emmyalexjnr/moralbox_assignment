import { Icon } from '@rneui/themed';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';


type RecordRowItem = {
    name: string, expiryDate: string, icon: string, status: 'active' | 'expired' | 'upcoming', value: string
}

type RecordRowProps = {
    item: RecordRowItem,
    onPress: () => void
}

const RecordRow = (props: RecordRowProps) => {
    const { item, onPress } = props


    const returnText = () => {
        switch (item.status) {
            case 'active':
                return 'Valid until'
            case 'expired':
                return 'Expired on'
            case 'upcoming':
                return 'Expires on'
            default:
                return 'Valid until'
        }
    }

    const returnTextColor = () => {
        switch (item.status) {
            case 'expired':
                return Colors.light.error
            case 'upcoming':
                return Colors.light.warning
            default:
                return Colors.light.text
        }
    }

    const returnColor = () => {
        switch (item.status) {
            case 'active':
                return Colors.light.success
            case 'expired':
                return Colors.light.error
            case 'upcoming':
                return Colors.light.warning
            default:
                return Colors.light.text
        }
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={{ flex: 1}}>
                <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 5, color: Colors.light.text }}>{item.name}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={[styles.statusContainer, { backgroundColor: returnColor()}]} />
                    <Text style={{ color: returnTextColor()}}>{returnText()} {item.expiryDate}</Text>
                </View>
            </View>
            <View>
                <Icon name={'chevron-forward'} type="ionicon" size={24} color={Colors.light.text} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Colors.light.background, flexDirection: 'row', alignItems: 'center', marginBottom: 16,
        borderRadius: 12, paddingHorizontal: 20, paddingVertical: 16
    },
    statusContainer: {
        width: 8, height: 8, borderRadius: 20,
        justifyContent: 'center', alignItems: 'center', marginRight: 8
    },
});

export default RecordRow