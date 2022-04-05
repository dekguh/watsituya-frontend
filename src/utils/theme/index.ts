const breakpoints : string[] = ['0px', '576px', '768px', '992px', '1440px']

export default {
    breakpoints,
    colors: {
        red: {
            primary: '#FC5C7D'
        },
        blue: {
            primary: '#6A82FB'
        },
        yellow: {
            primary: '#FBF56A'
        },
        purple: {
            primary: '#8B1196'
        },
        white: '#FFFFFF',
        gray: {
            light: '#75747C'
        },
        dark: '#221E3C'
    },
    /** button style */
    buttonStyles: {
        primary: {
            background: 'linear-gradient(90deg, rgba(252,92,125,1) 0%, rgba(106,130,251,1) 100%)',
            color: '#FFFFFF',
            padding: '12px 25px',
            border: 'none',
            fontFamily: 'Orbitron'
        },
        secondary: {
            background: 'linear-gradient(90deg, rgba(252,92,125,1) 0%, rgba(106,130,251,1) 100%)',
            padding: '1px',
            fontFamily: 'Orbitron',
            border: 'none',
            '& .text': {
                padding: '11px 24px',
                display: 'inline-block',
                backgroundColor: '#221E3C',
                '& .text-gradient': {
                    background: 'linear-gradient(90deg, rgba(252,92,125,1) 0%, rgba(106,130,251,1) 100%)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                }
            }
        }
    }
}