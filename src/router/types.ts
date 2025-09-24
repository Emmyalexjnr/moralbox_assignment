import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  Home: NavigatorScreenParams<TabStackParamList>;
  PreviewRecord: undefined;
};

export type TabStackParamList = {
  Home: undefined;
  AllRecords: undefined;
};