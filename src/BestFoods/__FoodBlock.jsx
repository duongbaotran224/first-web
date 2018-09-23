import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';

const style = (theme) => {
    return({
        root: {
            width: '100%',
            [theme.breakpoints.up('md')]: {
                height: `${(1140*98/100)/2}px`,
            },
            [theme.breakpoints.between('sm', 'md')]: {
                height: `${(900*98/100)}px`,
            },
            [theme.breakpoints.between('xs','sm')]: {
                height: `${(720*98/100)}px`,
            },
            [theme.breakpoints.down('xs')]: {
                height: `${(500*98/100)}px`,
            },
            [theme.breakpoints.down('380')]: {
               height: `${(350*98/100)}px` ,
            },
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Quicksand, sans-serif',
            // fontFamily: ', sans-serif',
        },
        block: {
            width: '100%',
            height: '50%'
        },
        desc: {
            width: '50%',
            height: '100%',
            position: 'relative',
            boxSizing: 'border-box',
            padding: '5%',
            backgroundColor: 'white'
        },
        image: {
            width: '50%',
            height: '100%',
        },
        title: {
            fontFamily: 'Playfair Display, serif',
            fontSize: 12,
            letterSpacing: '0.2em',
            marginBottom: '0.5rem',
            color: '#ff7a5c',
            [theme.breakpoints.between('sm', 'md')]: {
                fontSize: 16,
            },
        },
        subtitle: {
            fontFamily: 'Playfair Display, serif',
            fontSize: 16,
            lineHeight: 1.5,
            marginBottom: '0.5rem',
            [theme.breakpoints.between('sm', 'md')]: {
                fontSize: 24,
            },
        },
        content: {
            fontFamily: 'Quicksand, sans-serif',
            // fontSize: 14,
            color: 'grey',
            [theme.breakpoints.up('md')]: {
                fontSize: 14,
                marginBottom: '3rem',
            },
            [theme.breakpoints.between('sm', 'md')]: {
                fontSize: 20,
                marginBottom: '3rem',
            },
            [theme.breakpoints.between('xs','sm')]: {
                fontSize: 16,
                marginBottom: '3rem',
            },
            [theme.breakpoints.down('xs')]: {
                display: 'none !important'
            },
            [theme.breakpoints.down('380')]: {
                display: 'none !important'
            },
        },
        layer_hover: {
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'all 0.3s ease',
            '&:hover': {
                opacity: 1,
                transition: 'all 0.3s ease',
            }
        },
        button: {
            fontSize: 10,
            '&:hover': {
                backgroundColor: 'white',
            },
        }

    })
}

class FoodBlock extends React.Component {
    render () {
        const {classes, block_1, block_2} = this.props;
        return (
            <Grid container className={classes.root}>
                <Grid item className={classes.block}
                    style={{ display: 'flex', flexDirection: 'row' }}>
                    <CardMedia className={classes.image} image={block_1.img_1} />
                    <div className={classes.desc}>
                        <Typography className={classes.title}>{block_1.title_1}</Typography>
                        <Typography className={classes.subtitle}>{block_1.subtitle_1}</Typography>
                        <Typography className={classes.content}>{block_1.content_1}</Typography>
                        <div className={classes.layer_hover}>
                            <Button className={classes.button}>
                              {'LEARN MORE'}
                            </Button>
                        </div>
                    </div>
                </Grid>
                <Grid item className={classes.block}
                    style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                    <CardMedia className={classes.image} image={block_2.img_2} />
                    <div className={classes.desc}>
                        <Typography className={classes.title}>{block_2.title_2}</Typography>
                        <Typography className={classes.subtitle}>{block_2.subtitle_2}</Typography>
                        <Typography className={classes.content}>{block_2.content_2}</Typography>
                        <div className={classes.layer_hover}>
                            <Button className={classes.button}>{'LEARN MORE'}</Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        )
    }
}
FoodBlock.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(FoodBlock)
