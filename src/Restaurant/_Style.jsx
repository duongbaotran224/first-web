
import Color from '../RandomColor'

export const style = (theme) => {
    return ({
        root: {
            position: 'relative',
            padding: '7em 0',
            border: 'none',
            boxShadow: 'none'
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
                maxWidth: '1140px'
            },
            [theme.breakpoints.between('sm', 'md')]: {
                maxWidth: '900px'
            },
            [theme.breakpoints.down('sm')]: {
                maxWidth: '720px'
            },
        },
        wrap_title: {
            position: 'relative',
            width: '65%',
            height: 'auto',
            boxSizing: 'border-box',
            marginBottom: '3rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            fontFamily: 'Playfair Display, serif',
            fontWeight: 500,
            lineHeight: '120%',
            color: 'black',
            // whiteSpace: 'pre-wrap',
            marginBottom: '0.7em',
            textAlign: 'left',
            [theme.breakpoints.up('lg')]: {
                fontSize: 50,
            },
            [theme.breakpoints.between('md', 'lg')]: {
                fontSize: 50,
            },
            [theme.breakpoints.between('sm', 'md')]: {
                fontSize: 44,
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: 38,
            },
            [theme.breakpoints.down('380')]: {
                fontSize: 22,
            },
        },
        subtitle: {
            fontFamily: 'Quicksand, sans-serif',
            fontSize: 20,
            lineHeight: '180%',
            color: 'grey',
            whiteSpace: 'pre-line',
            marginBottom: '1.5em',
            textAlign: 'left'
        },
        grid: {
            height: 500,
            width: '100%',
            // backgroundColor: 'yellowgreen',
            // margin: 'auto'
        },
        col_0: {
            flexGrow: 1,
            backgroundColor: Color()
        },
        col_1: {
            flexGrow: 1,
            backgroundColor: Color()
        },
        col_2: {
            flexGrow: 1,
            backgroundColor: Color()
        },
        col_3: {
            flexGrow: 1,
            backgroundColor: Color()
        },
        col_4: {
            flexGrow: 1,
            backgroundColor: Color()
        }
    })
}
export default style