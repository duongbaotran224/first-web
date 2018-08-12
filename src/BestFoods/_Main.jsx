import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types'; 
import style from './_Style.jsx';
import Typography from '@material-ui/core/Typography';
import FoodBlock from './__FoodBlock'
import { GridList } from '@material-ui/core';

class BestFoods extends React.Component {
    render () {
        const {classes} = this.props;
        return (
            <Paper className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.wrap_title}>
                        <Typography className={classes.title}>
                            {'Find your best food'}
                        </Typography>
                        <Typography className={classes.subtitle}>
                            {'Free Website Template For Restaurants Made by Tran'}
                        </Typography>
                    </div>
                    <GridList className={classes.grid_list} cols={3} spacing={20}>
                        <FoodBlock />
                        <FoodBlock />
                        <FoodBlock />
                    </GridList>
                </div>
            </Paper>
        )
    }
}
BestFoods.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(BestFoods)