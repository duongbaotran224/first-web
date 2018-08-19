import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types'; 
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid'

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
            flexDirection: 'column'
        },
        block: {
            width: '100%',
            height: '50%'
        },
        desc: {
            width: '50%',
            height: '100%'
        },
        image: {
            width: '50%',
            height: '100%'
        },
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
                        <Typography>{block_1.title_1}</Typography>
                        <Typography>{block_1.subtitle_1}</Typography>
                        <Typography>{block_1.content_1}</Typography>
                    </div>
                </Grid>
                <Grid item className={classes.block}
                    style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                    <CardMedia className={classes.image} image={block_2.img_2} />
                    <div className={classes.desc}>
                        <Typography>{block_2.title_2}</Typography>
                        <Typography>{block_2.subtitle_2}</Typography>
                        <Typography>{block_2.content_2}</Typography>
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