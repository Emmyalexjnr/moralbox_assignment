import { Card, Icon } from '@rneui/base';
import { Button } from '@rneui/themed';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ViewContainer } from '../components/ViewContainer';
import { Colors } from '../constants/Colors';

const arr = [
    { name: 'Safety Training', icon: 'seatbelt', expiryDate: '2023-01-01' },
    { name: 'Security Training', icon: 'shield-lock', expiryDate: '2025-07-01' },
    { name: 'Compliance Training', icon: 'file-document-outline', expiryDate: '2028-07-01' },
    { name: 'Health Training', icon: 'heart-pulse', expiryDate: '2030-07-01' },
]

const Home = () => {

    const renderItems = () => {
        return arr.map((item, index) => {
            return (
                <View style={styles.rowContainer} key={index}>
                    <View style={styles.iconContainer}>
                        <Icon name={item.icon} type="material-community" size={24} color={Colors.light.primary} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>{item.name}</Text>
                        <Text style={{ fontSize: 12, color: Colors.light.text }}>{item.expiryDate}</Text>
                    </View>
                </View>
            )
        })
    }
    return (
        <View style={styles.container}>
            <ViewContainer style={{ flex: 1, paddingHorizontal: 25, backgroundColor: Colors.light.backgroundLight, }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Card containerStyle={{ borderRadius: 12, margin: 0 }}>
                            <Text style={{ fontSize: 16 }}>Total Training</Text>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>12</Text>
                        </Card>
                        <Card containerStyle={{ borderRadius: 12, margin: 0 }}>
                            <Text style={{ fontSize: 16 }}>Expiring/Expired Training</Text>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>3</Text>

                        </Card>

                    </View>
                    <View>
                        <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 20, fontWeight: 'bold' }}>Recent Training</Text>
                        <View>
                            {renderItems()}
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Button title="View All Records" buttonStyle={{
                                borderRadius: 30, backgroundColor: Colors.light.primary, paddingVertical: 16
                            }} onPress={() => { }} />
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
        backgroundColor: Colors.light.backgroundLight,
    },
    rowContainer: {
        paddingHorizontal: 20, paddingVertical: 16, borderRadius: 12, backgroundColor: Colors.light.background,
        flexDirection: 'row', alignItems: 'center', marginBottom: 16
    },
    iconContainer: {
        width: 40, height: 40, borderRadius: 40, backgroundColor: Colors.light.secondaryBackground,
        justifyContent: 'center', alignItems: 'center', marginRight: 10
    }
});

export default Home