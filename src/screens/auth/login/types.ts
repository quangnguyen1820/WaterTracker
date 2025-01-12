import { ContantsNavigator } from "@navigation/ContantsNavigator";
import { NavigationProp } from "@react-navigation/native";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

export interface SocialButtonProps {
    onPress: () => void;
    icon: ImageSourcePropType;
    text: string;
    style?: StyleProp<ViewStyle>;
}

export interface LoginScreenProps {
    navigation: NavigationProp<ContantsNavigator>
}