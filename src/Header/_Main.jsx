import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'; 
import style from './_Style.jsx';
import CoverBackground from '../../src/Images/slider-1.jpg'
import Typography from '@material-ui/core/Typography';

class Header extends React.Component {
    render () {
        const {classes} = this.props;
        return (
            <Paper className={classes.root}>
                <CardMedia className={classes.background} image = {CoverBackground}/>
                <div className={classes.layer}></div>
                <div className={classes.container}>
                    <div className={classes.content}> 
                        <Typography className={classes.title}>
                            {'Welcome to Meal, where \n food speaks with your palate'}
                        </Typography>
                        <Typography className={classes.subtitle}>
                            {'Free Webite Template For Restaurant \n Made by Tran'}
                        </Typography>
                        <Button className={classes.button}>{'RESERVE A TABLE'}</Button>
                    </div> 
                </div>
            </Paper>
        )
    }
}
Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Header)