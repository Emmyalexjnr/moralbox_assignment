import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import BackHeader from '../components/BackHeader'
import RecordRow from '../components/RecordRow'
import { ViewContainer } from '../components/ViewContainer'
import { Colors } from '../constants/Colors'

type StatusType = 'active' | 'expired' | 'upcoming'

type RecordRowItem = {
    name: string, icon: string, status: StatusType, expiryDate: string, value: string
}

const allRecords: RecordRowItem[] = [
    {
        name: 'Safety Training', icon: 'seatbelt', status: 'active', expiryDate: '2023-01-01',
        value: 'https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf'
    },
    {
        name: 'Security Training', icon: 'shield-lock', status: 'expired', expiryDate: '2025-07-01',
        value: 'https://www.princexml.com/samples/usenix/example.pdf'

    },
    {
        name: 'Compliance Training', icon: 'file-document-outline', status: 'upcoming',
        value: 'https://www.princexml.com/samples/magic8/index.pdf', expiryDate: '2025-07-11'
    },
    {
        name: 'Health Training', icon: 'heart-pulse', status: 'active',
        value: 'https://www.princexml.com/samples/magic6/magic.pdf', expiryDate: '2030-07-01'
    },
    {
        name: 'Financial Training', icon: 'cash-usd', status: 'expired',
        value: 'https://www.princexml.com/samples/magic6/magic.pdf', expiryDate: '2024-07-01'
    },
]

const AllRecords = () => {

    const navigation = useNavigation()

    const onItemPress = (item: RecordRowItem) => {
        navigation.navigate('PreviewRecord', { record: item })
    }

    const renderRecords = () => {
        return allRecords.map((item, index) => {
            return (
                <RecordRow item={item} key={index} onPress={() => { onItemPress(item) }} />
            )
        })
    }
    return (
        <View style={styles.container}>
            <ViewContainer style={{ flex: 1, paddingHorizontal: 25, backgroundColor: Colors.light.backgroundLight, }}>
                <BackHeader title={'Records'} />
                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 25 }}>
                    {renderRecords()}
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