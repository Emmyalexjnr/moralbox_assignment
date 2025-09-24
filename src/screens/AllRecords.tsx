import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import BackHeader from '../components/BackHeader'
import { ViewContainer } from '../components/ViewContainer'
import { Colors } from '../constants/Colors'

const AllRecords = () => {
    return (
        <View style={styles.container}>
            <ViewContainer style={{ flex: 1, paddingHorizontal: 25, backgroundColor: Colors.light.backgroundLight, }}>
                <BackHeader title={'Records'} />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                </ScrollView>
            </ViewContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.backgroundLight,
    },
    rowContainer: {
        paddingHorizontal: 20, paddingVertical: 16, borderRadius: 12, backgroundColor: Colors.light.background,
        flexDirection: 'row', alignItems: 'center', marginBottom: 16
    },
});

export default AllRecords