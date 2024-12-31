import { ColorsText } from "@themes/colors";

interface svgIconProps {
    name: string;
    size?: number;
    color?: string;
}

const svgApp = (props: svgIconProps) => {
    const { name, size = 24, color = ColorsText.black } = props;
    switch (name) {
        case 'dismiss':
            return `<svg width=${size} height=${size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.25 18.75L18.75 31.25" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.75 18.75L31.25 31.25" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `;
        case 'dismiss-input':
            return `<svg width=${size} height=${size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill=${color}/>
            <path d="M13.0599 12.0001L15.3599 9.70011C15.6499 9.41011 15.6499 8.93011 15.3599 8.64011C15.0699 8.35011 14.5899 8.35011 14.2999 8.64011L11.9999 10.9401L9.69986 8.64011C9.40986 8.35011 8.92986 8.35011 8.63986 8.64011C8.34986 8.93011 8.34986 9.41011 8.63986 9.70011L10.9399 12.0001L8.63986 14.3001C8.34986 14.5901 8.34986 15.0701 8.63986 15.3601C8.78986 15.5101 8.97986 15.5801 9.16986 15.5801C9.35986 15.5801 9.54986 15.5101 9.69986 15.3601L11.9999 13.0601L14.2999 15.3601C14.4499 15.5101 14.6399 15.5801 14.8299 15.5801C15.0199 15.5801 15.2099 15.5101 15.3599 15.3601C15.6499 15.0701 15.6499 14.5901 15.3599 14.3001L13.0599 12.0001Z" fill="white"/>
            </svg>
            `
        case 'radio-checked':
            return `<svg width=${size} height=${size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="14" height="14" rx="7" stroke="#FF4747" stroke-opacity="0.278431" stroke-width="2"/>
            <circle cx="8" cy="8" r="4" fill="#FF4747"/>
            </svg>
            `
        case 'radio-unChecked':
            return `<svg width=${size} height=${size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="14" height="14" rx="7" stroke="#CBCBCB" stroke-width="2"/>
            </svg>
            `
        case 'eye':
            return `<svg width=${size} height=${size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.39997C18.8198 5.79997 15.5298 3.71997 11.9998 3.71997C8.46984 3.71997 5.17984 5.79997 2.88984 9.39997C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `
        case 'eye-off':
            return `<svg width=${size} height=${size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.8198 5.76998C16.0698 4.44998 14.0698 3.72998 11.9998 3.72998C8.46984 3.72998 5.17984 5.80998 2.88984 9.40998C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.41992 19.5299C9.55992 20.0099 10.7699 20.2699 11.9999 20.2699C15.5299 20.2699 18.8199 18.1899 21.1099 14.5899C22.0099 13.1799 22.0099 10.8099 21.1099 9.39993C20.7799 8.87993 20.4199 8.38993 20.0499 7.92993" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.47 14.53L2 22" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.9998 2L14.5298 9.47" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `
        case 'dismiss':
            return `<svg width=${size} height=${size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#171717"/>
            <path d="M13.0599 12.0001L15.3599 9.70011C15.6499 9.41011 15.6499 8.93011 15.3599 8.64011C15.0699 8.35011 14.5899 8.35011 14.2999 8.64011L11.9999 10.9401L9.69986 8.64011C9.40986 8.35011 8.92986 8.35011 8.63986 8.64011C8.34986 8.93011 8.34986 9.41011 8.63986 9.70011L10.9399 12.0001L8.63986 14.3001C8.34986 14.5901 8.34986 15.0701 8.63986 15.3601C8.78986 15.5101 8.97986 15.5801 9.16986 15.5801C9.35986 15.5801 9.54986 15.5101 9.69986 15.3601L11.9999 13.0601L14.2999 15.3601C14.4499 15.5101 14.6399 15.5801 14.8299 15.5801C15.0199 15.5801 15.2099 15.5101 15.3599 15.3601C15.6499 15.0701 15.6499 14.5901 15.3599 14.3001L13.0599 12.0001Z" fill="white"/>
            </svg>
            `
        case 'email':
            return `<svg width=${size} height=${size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke=${color} stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 6L12 13L2 6" stroke=${color} stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        case 'password':
            return `<svg width=${size} height=${size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke=${color} stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke=${color} stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;

        default:
            return ''
    }
}

export default svgApp