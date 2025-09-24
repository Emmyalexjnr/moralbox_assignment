import { useNavigation } from '@react-navigation/native';
import { Button, Card, Icon } from '@rneui/themed';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ViewContainer } from '../components/ViewContainer';
import { Colors } from '../constants/Colors';
import { RecordRowItem } from '../router/types';

const arr: RecordRowItem[] = [
    {
        name: 'Safety Training', icon: 'seatbelt', expiryDate: '2023-01-01',
        status: 'upcoming', value: 'https://www.princexml.com/samples/usenix/example.pdf'
    },
    {
        name: 'Security Training', icon: 'shield-lock', expiryDate: '2025-07-01',
        status: 'active', value: 'https://www.princexml.com/samples/usenix/example.pdf'
    },
    {
        name: 'Compliance Training', icon: 'file-document-outline', expiryDate: '2028-07-01',
        status: 'expired', value: 'https://www.princexml.com/samples/magic8/index.pdf'
    },
    {
        name: 'Health Training', icon: 'heart-pulse', expiryDate: '2030-07-01',
        status: 'active', value: 'https://www.princexml.com/samples/magic6/magic.pdf'
    },
]

const SCREEN_WIDTH = Dimensions.get('window').width

const itemWidth = (SCREEN_WIDTH - 60)/ 2

const Home = () => {

    const navigation = useNavigation()


    const renderItems = () => {
        return arr.map((item, index) => {
            return (
                <TouchableOpacity style={styles.rowContainer} key={index} onPress={() => { navigation.navigate('PreviewRecord', { record: item }) }}>
                    <View style={styles.iconContainer}>
                        <Icon name={item.icon} type="material-community" size={24} color={Colors.light.primary} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{item.name}</Text>
                        <Text style={{ fontSize: 12, color: Colors.light.text }}>{item.expiryDate}</Text>
                    </View>
                </TouchableOpacity>
            )
        })
    }
    return (
        <View style={styles.container}>

            <ViewContainer style={{ flex: 1, backgroundColor: Colors.light.backgroundLight, }}>
                <View style={styles.headerContainer}>
                    <View>
                        <Image source={require('../assets/images/logo.png')} style={{ width: 140, height: 40 }} resizeMode={'contain'} />
                    </View>
                    {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.light.text }}>Dashboard</Text>
                    </View> */}
                </View>
                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 25, }}>
                    <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap', width: '100%' }}>
                        <Card containerStyle={{ borderRadius: 12, margin: 0, padding: 20, width: itemWidth}}>
                            <Text style={{ fontSize: 16, marginBottom: 5 }}>Total Training</Text>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>12</Text>
                        </Card>
                        <Card containerStyle={{ borderRadius: 12, margin: 0, padding: 20, width: itemWidth }} >
                            <Text style={{ fontSize: 16, marginBottom: 5 }}>Upcoming Training</Text>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>2</Text>

                        </Card>

                        <Card containerStyle={{ borderRadius: 12, margin: 0, padding: 20, width: itemWidth }} >
                            <Text style={{ fontSize: 16, marginBottom: 5 }}>Expired Training</Text>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>3</Text>

                        </Card>
                        <Card containerStyle={{ borderRadius: 12, margin: 0, padding: 20, width: itemWidth }} >
                            <Text style={{ fontSize: 16, marginBottom: 5 }}>Expiring Training</Text>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>5</Text>

                        </Card>
                        

                    </View>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 20, fontWeight: 'bold', color: Colors.light.text }}>Recent Training</Text>
                        <View>
                            {renderItems()}
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Button title="View All Records" buttonStyle={{
                                borderRadius: 30, backgroundColor: Colors.light.primary, paddingVertical: 16
                            }} onPress={() => { navigation.navigate('Tabs', { screen: 'AllRecords' }) }} />
                        </View>
                    </View>
                </ScrollView>
            </ViewContainer>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    },
    rowContainer: {
        paddingHorizontal: 20, paddingVertical: 16, borderRadius: 12, backgroundColor: Colors.light.background,
        flexDirection: 'row', alignItems: 'center', marginBottom: 16
    },
    iconContainer: {
        width: 40, height: 40, borderRadius: 40, backgroundColor: Colors.light.secondaryBackground,
        justifyContent: 'center', alignItems: 'center', marginRight: 10
    },
    headerContainer: {
        backgroundColor: Colors.light.background,
        paddingHorizontal: 25, paddingBottom: 20, paddingTop: 10, marginBottom: 20, flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center'
    }
});

export default Home