import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  ViewStyle
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';


type ViewContainerProps = {
  style?: ViewStyle
  children: React.ReactNode,
}


const ViewContainer = (props: ViewContainerProps) => {

  const insets = useSafeAreaInsets();


  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <StatusBar translucent={true} backgroundColor="rgba(0,0,0,0)" barStyle={'light-content'} />
      <View style={[styles.containerStyles, { paddingBottom: Math.max(insets.bottom, 16) }, props.style]}>
        {props.children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
});

export { ViewContainer };

