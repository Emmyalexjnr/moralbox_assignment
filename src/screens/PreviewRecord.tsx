import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
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
    return (
        <View style={styles.container}>
            <ViewContainer style={{ flex: 1, paddingHorizontal: 25, backgroundColor: Colors.light.backgroundLight, }}>
                <BackHeader title={record.name} />

                <View style={{ flex: 1 }}>
                    <View style={styles.pdfContainer}>
                        <Pdf
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