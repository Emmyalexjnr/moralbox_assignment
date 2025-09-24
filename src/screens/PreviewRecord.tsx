import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Pdf from 'react-native-pdf'
import BackHeader from '../components/BackHeader'
import { ViewContainer } from '../components/ViewContainer'
import { Colors } from '../constants/Colors'
import { RootStackParamList } from '../router/types'


type Props = NativeStackScreenProps<RootStackParamList, 'PreviewRecord'>

const PreviewRecord = (props: Props) => {

    const { route } = props
    const record = route.params.record
    const source = { uri: record.value, cache: true };
    const returnText = () => {
        switch (record.status) {
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
        switch (record.status) {
            case 'expired':
                return Colors.light.error
            case 'upcoming':
                return Colors.light.warning
            default:
                return Colors.light.text
        }
    }

    const returnColor = () => {
        switch (record.status) {
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
        <View style={styles.container}>
            <ViewContainer style={{ flex: 1, paddingHorizontal: 25, backgroundColor: Colors.light.backgroundLight, }}>
                <BackHeader title={record.name} />
                <View style={{ alignItems: 'center', marginTop: 8}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={[styles.statusContainer, { backgroundColor: returnColor() }]} />
                        <Text style={{ color: returnTextColor() }}>{returnText()} {record.expiryDate}</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.pdfContainer}>
                        <Pdf
                            trustAllCerts={false}
                            source={source}
                            onLoadComplete={(numberOfPages, filePath) => {
                                console.log(`Number of pages: ${numberOfPages}`);
                            }}
                            onPageChanged={(page, numberOfPages) => {
                                console.log(`Current page: ${page}`);
                            }}
                            onError={(error) => {
                                console.log(error);
                            }}
                            onPressLink={(uri) => {
                                console.log(`Link pressed: ${uri}`);
                            }}
                            style={styles.pdf} />
                    </View>
                </View>
            </ViewContainer>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.backgroundLight,
    },
    statusContainer: {
        width: 8, height: 8, borderRadius: 20,
        justifyContent: 'center', alignItems: 'center', marginRight: 8
    },
    pdfContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },

    pdf: {
        // flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 100,
    }
});

export default PreviewRecord