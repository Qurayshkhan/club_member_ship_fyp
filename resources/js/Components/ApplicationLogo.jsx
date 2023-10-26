export default function ApplicationLogo(props) {
    return (
        // <svg {...props} viewBox="0 0 316 316" xmlns="http://www.w3.org/2000/svg">
        //     <path d="M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z" />
        // </svg>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="182"
            height="41"
            xmlSpace="preserve"
            version="1.1"
            viewBox="0 0 182 41"
        >
            <image
                width="182"
                height="41"
                xlinkHref="data:image/png;base64,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"
            />
        </svg>
    );
}