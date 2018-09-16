
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
        grid: {
            width: '100%',
        },
        grid_item: {
            width: '100%',
            boxShadow: 'none'
        },
        image: {
            width: 200,
            height: 200,
            boxSizing: 'border-box',
            margin: '2em auto',
        },
        button: {
            color: 'red',
            width: '1.5em',
            height: '1.5em',
            margin: 'auto',
            '&:hover' : {
               backgroundColor: `rgba(255,0,0,0.1)`
            }
        },
        icon: {
            fontSize: 15
        }
    })
}
export default style