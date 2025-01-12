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
        case 'user':
            return `<svg width=${size} height=${size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5164 21.5C4.77369 17.591 8.02588 14.5 12 14.5C15.9741 14.5 19.2263 17.591 19.4836 21.5H18.4811C18.2257 18.1438 15.4216 15.5 12 15.5C8.57838 15.5 5.77426 18.1438 5.51894 21.5H4.5164ZM12 12.5C8.96114 12.5 6.5 10.0389 6.5 7C6.5 3.96114 8.96114 1.5 12 1.5C15.0389 1.5 17.5 3.96114 17.5 7C17.5 10.0389 15.0389 12.5 12 12.5ZM12 11.5C14.4861 11.5 16.5 9.48614 16.5 7C16.5 4.51386 14.4861 2.5 12 2.5C9.51386 2.5 7.5 4.51386 7.5 7C7.5 9.48614 9.51386 11.5 12 11.5Z" fill="black" stroke=${color}/>
            </svg>
        `;
        case 'phone':
            return `<svg width=${size} height=${size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.971 18.33C21.971 18.69 21.891 19.06 21.721 19.42C21.551 19.78 21.331 20.12 21.041 20.44C20.551 20.98 20.011 21.37 19.401 21.62C18.801 21.87 18.151 22 17.451 22C16.431 22 15.341 21.76 14.191 21.27C13.041 20.78 11.891 20.12 10.751 19.29C9.60098 18.45 8.51098 17.52 7.47098 16.49C6.44098 15.45 5.51098 14.36 4.68098 13.22C3.86098 12.08 3.20098 10.94 2.72098 9.81C2.24098 8.67 2.00098 7.58 2.00098 6.54C2.00098 5.86 2.12098 5.21 2.36098 4.61C2.60098 4 2.98098 3.44 3.51098 2.94C4.15098 2.31 4.85098 2 5.59098 2C5.87098 2 6.15098 2.06 6.40098 2.18C6.66098 2.3 6.89098 2.48 7.07098 2.74L9.39098 6.01C9.57098 6.26 9.70098 6.49 9.79098 6.71C9.88098 6.92 9.93098 7.13 9.93098 7.32C9.93098 7.56 9.86098 7.8 9.72098 8.03C9.59098 8.26 9.40098 8.5 9.16098 8.74L8.40098 9.53C8.29098 9.64 8.24098 9.77 8.24098 9.93C8.24098 10.01 8.25098 10.08 8.27098 10.16C8.30098 10.24 8.33098 10.3 8.35098 10.36C8.53098 10.69 8.84098 11.12 9.28098 11.64C9.73098 12.16 10.211 12.69 10.731 13.22C11.271 13.75 11.791 14.24 12.321 14.69C12.841 15.13 13.271 15.43 13.611 15.61C13.661 15.63 13.721 15.66 13.791 15.69C13.871 15.72 13.951 15.73 14.041 15.73C14.211 15.73 14.341 15.67 14.451 15.56L15.211 14.81C15.461 14.56 15.701 14.37 15.931 14.25C16.161 14.11 16.391 14.04 16.641 14.04C16.831 14.04 17.031 14.08 17.251 14.17C17.471 14.26 17.701 14.39 17.951 14.56L21.261 16.91C21.521 17.09 21.701 17.3 21.811 17.55C21.911 17.8 21.971 18.05 21.971 18.33Z" stroke=${color} stroke-width="1.5" stroke-miterlimit="10"/>
            </svg>
        `;

        default:
            return ''
    }
}

export default svgApp