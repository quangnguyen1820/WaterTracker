import { ContantsNavigator } from "@navigation/ContantsNavigator";
import { NavigationProp } from "@react-navigation/native";

export interface RegisterScreenProps {
    navigation: NavigationProp<ContantsNavigator>
}

export type KeyField = 'email' | 'password' | 'fullName' | 'phone'

export type ValidationRule = {
    required?: boolean;
    pattern?: RegExp;
    minLength?: number;
    messages: {
        required?: string;
        pattern?: string;
        minLength?: string;
    };
};

