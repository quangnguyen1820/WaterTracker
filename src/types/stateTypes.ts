export interface BaseInputState {
    value: string;
    isValid: boolean;
    msgValid: string;
}

export interface PasswordState extends BaseInputState {
    showPassword: boolean;
}