import { ColorsText } from "@themes/colors";

interface svgIconProps {
    name: string;
    size?: number;
    color?: string;
    sizeSecod?: number
}

const svgChart = (props: svgIconProps) => {
    const { name, size = 24, sizeSecod = 24, color = ColorsText.black } = props;
    switch (name) {
        case 'chart-round':
            return `<svg width=${size} height=${size} viewBox="8 8 156 156" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_155_977)">
            <rect x="8" y="8" width="156" height="156" rx="78" fill="white"/>
            <path d="M79.7733 87.8903C6.34613 114.876 -57.7921 29.0533 -119.276 56.4811C-155.99 65.3287 -230.125 83.9973 -232.956 87.8903C-235.787 91.7832 -238.559 177.989 -239.591 220.605L305.805 310.409C342.961 264.549 406.746 159.733 364.636 107.355C311.998 41.8824 153.201 60.9049 79.7733 87.8903Z" fill="#50BEFC" fill-opacity="0.72"/>
            <path d="M160.558 88.508C98.8536 111.19 44.9554 39.0528 -6.71255 62.1071C-37.5646 69.544 -99.8635 85.2358 -102.242 88.508C-104.621 91.7802 -106.951 164.24 -107.818 200.061L350.502 275.545C381.726 236.998 435.327 148.895 399.94 104.869C355.706 49.8362 222.262 65.8255 160.558 88.508Z" fill="#3BB8ED" fill-opacity="0.69"/>
            </g>
            <rect x="12" y="12" width="148" height="148" rx="82" stroke="#ADE5FC" stroke-width="8"/>
            <defs>
            <clipPath id="clip0_155_977">
            <rect x="8" y="8" width="156" height="156" rx="78" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            `

        default:
            return ''
    }
}

export default svgChart