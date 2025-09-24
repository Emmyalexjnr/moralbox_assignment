import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllRecordsScreen from '../screens/AllRecords';
import HomeScreen from '../screens/Home';
import PreviewRecordScreen from '../screens/PreviewRecord';
import SplashScreen from '../screens/Splash';
import MyTabBar from './MyTabBar';
import { RootStackParamList, TabStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator<TabStackParamList>();

const HomeStack = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <MyTabBar {...props} />}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="AllRecords" component={AllRecordsScreen} />
        </Tab.Navigator>
    );
};

function RootStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Tabs" component={HomeStack} />
            <Stack.Screen name="PreviewRecord" component={PreviewRecordScreen} />
        </Stack.Navigator>
    );
}
export default function App() {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
}