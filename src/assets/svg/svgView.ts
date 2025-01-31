import { ColorsText } from "@themes/colors";

interface svgIconProps {
    name: string;
    size?: number;
    color?: string;
    sizeSecod?: number
}

const svgView = (props: svgIconProps) => {
    const { name, size = 24, sizeSecod = 24, color = ColorsText.black } = props;
    switch (name) {
        case 'card-goal':
            return `<svg width=${size} height=${sizeSecod} viewBox="0 74 319 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="74" width="319" height="160" rx="16" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M319 160.548V218C319 226.837 311.837 234 303 234H16C7.16344 234 0 226.837 0 218V162.068C17.9072 166.3 36.3234 166.888 55.3642 159.89C120.629 135.905 253.339 118.21 319 160.548Z" fill="#5DCCFC" fill-opacity="0.41"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M319 139.892V218C319 226.837 311.837 234 303 234H16C7.16344 234 0 226.837 0 218V140.555C15.1004 142.469 31.1536 145.977 47.4525 149.539C83.8943 157.504 121.564 165.737 152.557 157.008C193.837 145.382 263.151 132.65 319 139.892Z" fill="#5DCCFC" fill-opacity="0.41"/>
            <path d="M300.478 114.572C300.478 123.68 293.095 131.063 283.987 131.063C274.879 131.063 267.496 123.68 267.496 114.572C267.496 106.404 273.067 101.015 281.116 92.912C282.697 91.3209 285.283 91.3152 286.868 92.9018C294.855 100.897 300.478 106.414 300.478 114.572Z" fill="url(#paint0_radial_145_699)"/>
            <g opacity="0.8" filter="url(#filter0_f_145_699)">
            <path d="M298.335 120.088C298.335 128.062 291.875 134.526 283.905 134.526C275.936 134.526 269.475 128.062 269.475 120.088C269.475 113.059 274.184 108.382 281.033 101.488C282.614 99.8962 285.202 99.8902 286.787 101.478C293.584 108.283 298.335 113.07 298.335 120.088Z" fill="url(#paint1_radial_145_699)"/>
            </g>
            <g style="mix-blend-mode:color-burn" filter="url(#filter1_f_145_699)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M299.584 119.879C296.572 123.831 291.814 126.382 286.461 126.382C277.353 126.382 269.97 118.998 269.97 109.89C269.97 107.779 270.342 105.853 271.033 104.018C268.791 107.279 267.496 110.571 267.496 114.508C267.496 123.616 274.879 130.999 283.987 130.999C291.215 130.999 297.356 126.35 299.584 119.879Z" fill="url(#paint2_radial_145_699)"/>
            </g>
            <g style="mix-blend-mode:screen" opacity="0.3">
            <circle cx="289.428" cy="105.667" r="15.6666" fill="url(#paint3_radial_145_699)"/>
            </g>
            <g style="mix-blend-mode:screen" opacity="0.7" filter="url(#filter2_f_145_699)">
            <circle cx="277.06" cy="121.333" r="15.6666" fill="url(#paint4_radial_145_699)"/>
            </g>
            <path d="M280.871 177.467C280.871 200.424 262.26 219.035 239.302 219.035C216.344 219.035 197.733 200.424 197.733 177.467C197.733 155.429 213.821 141.418 236.437 118.453C238.01 116.855 240.599 116.849 242.178 118.441C264.608 141.05 280.871 155.44 280.871 177.467Z" fill="url(#paint5_radial_145_699)"/>
            <g opacity="0.8" filter="url(#filter3_f_145_699)">
            <path d="M275.469 191.371C275.469 211.471 259.184 227.765 239.096 227.765C219.008 227.765 202.724 211.471 202.724 191.371C202.724 172.194 216.63 159.96 236.229 140.071C237.803 138.472 240.394 138.467 241.975 140.059C261.413 159.643 275.469 172.205 275.469 191.371Z" fill="url(#paint6_radial_145_699)"/>
            </g>
            <g style="mix-blend-mode:color-burn" filter="url(#filter4_f_145_699)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M278.617 190.843C271.023 200.805 259.032 207.235 245.538 207.235C222.58 207.235 203.97 188.624 203.97 165.666C203.97 160.343 204.908 155.489 206.65 150.863C200.998 159.083 197.735 167.38 197.735 177.305C197.735 200.263 216.346 218.874 239.303 218.874C257.521 218.874 273.002 207.154 278.617 190.843Z" fill="url(#paint7_radial_145_699)"/>
            </g>
            <g style="mix-blend-mode:screen" opacity="0.3">
            <circle cx="253.021" cy="155.019" r="39.4902" fill="url(#paint8_radial_145_699)"/>
            </g>
            <g style="mix-blend-mode:screen" opacity="0.7" filter="url(#filter5_f_145_699)">
            <circle cx="221.845" cy="194.51" r="39.4902" fill="url(#paint9_radial_145_699)"/>
            </g>
            <defs>
            <filter id="filter0_f_145_699" x="169.475" y="0.290527" width="228.86" height="234.236" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_145_699"/>
            </filter>
            <filter id="filter1_f_145_699" x="257.496" y="94.0183" width="52.0881" height="46.981" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_145_699"/>
            </filter>
            <filter id="filter2_f_145_699" x="211.394" y="55.6666" width="131.333" height="131.333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_145_699"/>
            </filter>
            <filter id="filter3_f_145_699" x="102.724" y="38.8683" width="272.745" height="288.896" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_145_699"/>
            </filter>
            <filter id="filter4_f_145_699" x="187.735" y="140.863" width="100.883" height="88.0102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_145_699"/>
            </filter>
            <filter id="filter5_f_145_699" x="132.355" y="105.02" width="178.98" height="178.98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_145_699"/>
            </filter>
            <radialGradient id="paint0_radial_145_699" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(283.987 120.179) rotate(-46.0086) scale(33.1225 26.6044)">
            <stop offset="0.109324" stop-color="#3CC7F5"/>
            <stop offset="1" stop-color="#5686F5"/>
            </radialGradient>
            <radialGradient id="paint1_radial_145_699" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(283.905 124.997) rotate(-46.025) scale(28.9908 23.2853)">
            <stop offset="0.109324" stop-color="#3CC7F5"/>
            <stop offset="1" stop-color="#5686F5"/>
            </radialGradient>
            <radialGradient id="paint2_radial_145_699" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(283.987 120.115) rotate(-46.0078) scale(33.1222 26.6042)">
            <stop offset="0.109324" stop-color="#3CC7F5"/>
            <stop offset="1" stop-color="#5686F5"/>
            </radialGradient>
            <radialGradient id="paint3_radial_145_699" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(289.428 105.667) rotate(51.5592) scale(16.8438 3.81296)">
            <stop stop-color="white"/>
            <stop offset="0.601048" stop-color="#BDDBF1" stop-opacity="0.28"/>
            <stop offset="1" stop-color="#5686F5" stop-opacity="0"/>
            </radialGradient>
            <radialGradient id="paint4_radial_145_699" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(277.06 121.333) rotate(50.1428) scale(11.7082 11.638)">
            <stop stop-color="white"/>
            <stop offset="0.601048" stop-color="#BDDBF1" stop-opacity="0.28"/>
            <stop offset="1" stop-color="#5686F5" stop-opacity="0"/>
            </radialGradient>
            <radialGradient id="paint5_radial_145_699" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(239.302 191.6) rotate(-46.0086) scale(83.4903 67.0605)">
            <stop offset="0.109324" stop-color="#3CC7F5"/>
            <stop offset="1" stop-color="#5686F5"/>
            </radialGradient>
            <radialGradient id="paint6_radial_145_699" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(239.096 203.745) rotate(-46.025) scale(73.0757 58.6942)">
            <stop offset="0.109324" stop-color="#3CC7F5"/>
            <stop offset="1" stop-color="#5686F5"/>
            </radialGradient>
            <radialGradient id="paint7_radial_145_699" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(239.303 191.439) rotate(-46.0082) scale(83.4898 67.0601)">
            <stop offset="0.109324" stop-color="#3CC7F5"/>
            <stop offset="1" stop-color="#5686F5"/>
            </radialGradient>
            <radialGradient id="paint8_radial_145_699" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(253.021 155.019) rotate(51.5592) scale(42.4575 9.61115)">
            <stop stop-color="white"/>
            <stop offset="0.601048" stop-color="#BDDBF1" stop-opacity="0.28"/>
            <stop offset="1" stop-color="#5686F5" stop-opacity="0"/>
            </radialGradient>
            <radialGradient id="paint9_radial_145_699" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(221.845 194.51) rotate(50.1428) scale(29.5123 29.3353)">
            <stop stop-color="white"/>
            <stop offset="0.601048" stop-color="#BDDBF1" stop-opacity="0.28"/>
            <stop offset="1" stop-color="#5686F5" stop-opacity="0"/>
            </radialGradient>
            </defs>
            </svg>
            `

        default:
            return ''
    }
}

export default svgView