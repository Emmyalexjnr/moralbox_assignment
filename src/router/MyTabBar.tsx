import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable, Text } from '@react-navigation/elements';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Icon } from '@rneui/base';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../constants/Colors';

function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  const insets = useSafeAreaInsets();

  const returnLabel = (label: string) => {
    if(label === 'AllRecords'){
      return 'All Records'
    }
    if(label === 'Home'){
      return 'Dashboard'
    }
    return label
  }

  const returnIconName = (label: string) => {
    switch (label) {
      case 'Home':
        return 'view-dashboard';
      case 'AllRecords':
        return 'folder';
      default:
        return 'view-dashboard';
    }
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable key={`${index}_TAB`}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 15, paddingBottom: Math.max( insets.bottom, 16) }}
          >
            <Icon name={returnIconName(label.toString())} type="material-community" size={24} color={isFocused ? Colors.light.primary : Colors.light.text} />
            <Text style={{ color: isFocused ? Colors.light.primary : Colors.light.text }}>
              {returnLabel(String(label))}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyTabBar;