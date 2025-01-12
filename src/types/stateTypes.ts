export interface BaseInputState {
    value: string;
    isValid: boolean;
    msgValid: string;
    showPassword?: boolean;
}

export interface PasswordState extends BaseInputState {
    showPassword: boolean;
}