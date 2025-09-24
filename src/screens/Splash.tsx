import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ViewContainer } from '../components/ViewContainer';
import { Colors } from '../constants/Colors';

const Splash = () => {
    const navigation = useNavigation()
    useEffect(() => {
        navigateToHome()
        return () => {

        };
    }, [])

    const navigateToHome = () => {
        setTimeout(() => {
            navigation.navigate('Tabs', { screen: 'Home' })
        }, 2000)
    }
    return (
        <View style={styles.container}>
            <ViewContainer style={{ flex: 1, backgroundColor: Colors.light.background, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/images/logo.png')} style={{ width: 240, height: 120 }} resizeMode={'contain'} />
            </ViewContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
    }
});

export default Splash