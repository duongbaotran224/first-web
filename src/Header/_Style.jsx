
export const style = (theme) => {
    return ({
        root: {
            position: 'relative',
            width: '100%',
            height: '100vh'
        },
        background: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        },
        layer: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            opacity: 0.15
        },
        container: {
            position: 'relative',
            height: '100%',
            boxSizing: 'border-box',
            margin: 'auto',
            padding: '2%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.up('lg')]: {
                maxWidth: '1140px'
            },
            [theme.breakpoints.between('md', 'lg')]: {
                maxWidth: '960px'
            },
            [theme.breakpoints.between('sm', 'md')]: {
                maxWidth: '720px'
            },
            [theme.breakpoints.down('sm')]: {
                maxWidth: '540px'
            },
        },
        content: {
            position: 'absolute',
            width: '100%',
            height: 'auto',
            boxSizing: 'border-box',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        title: {
            fontFamily: 'Playfair Display, serif',
            // fontSize: 70,
            fontWeight: 700,
            lineHeight: '130%',
            color: 'white',
            whiteSpace: 'pre-wrap',
            marginBottom: '0.5em',
            [theme.breakpoints.up('lg')]: {
                fontSize: 70,
            },
            [theme.breakpoints.between('md', 'lg')]: {
                fontSize: 70,
            },
            [theme.breakpoints.between('sm', 'md')]: {
                fontSize: 64,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 48,
            },
            [theme.breakpoints.down('380')]: {
                fontSize: 32,
            },
        },
        subtitle: {
            fontFamily: 'Muli, sans-serif',
            fontSize: 26,
            lineHeight: '180%',
            color: 'white',
            whiteSpace: 'pre-line',
            marginBottom: '1.5em'
        },
        button: {
            fontFamily: 'Muli, sans-serif',
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '180%',
            color: 'white',
            whiteSpace: 'pre-line',
            letterSpacing: '0.2em',
            width: 260,
            boxSizing: 'border-box',
            border: '2px solid white',
            padding: '1em 2em',
            marginBottom: '1.5em',
            '&:hover': {
                backgroundColor: 'white',
                color: 'black'
            }
        }
    })
}
export default style