import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


type BackHeaderProps = {
    title: string
}

const BackHeader = (props: BackHeaderProps) => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ paddingRight: 40}}>
                <Icon name="arrow-left" type="material-community" size={24} color="black" />
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center', paddingRight: 40 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{props.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1
    },
});

export default BackHeader