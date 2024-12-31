import { EMAIL_REGEX } from "@constants/regexs";

export const isValidEmail = (value: string): boolean => EMAIL_REGEX.test(value);