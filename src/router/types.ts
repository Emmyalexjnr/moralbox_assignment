import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StatusType = 'active' | 'expired' | 'upcoming'

export type RecordRowItem = {
    name: string, icon: string, status: StatusType, expiryDate: string, value: string
}


export type RootStackParamList = {
    Splash: undefined;
    Tabs: NavigatorScreenParams<TabStackParamList>;
    PreviewRecord: { record: RecordRowItem };
};

export type TabStackParamList = {
    Home: undefined;
    AllRecords: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}