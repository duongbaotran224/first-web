import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types'; 
import style from './_Style.jsx';
import Typography from '@material-ui/core/Typography';
import FoodBlock from './__FoodBlock'
import Grid from '@material-ui/core/Grid'
import Dish_1 from '../../src/Images/img_1.jpg'
import Dish_2 from '../../src/Images/img_2.jpg'
import Dish_3 from '../../src/Images/img_3.jpg'

class BestFoods extends React.Component {
    data = [
            {
               'img_1': Dish_1,
               'img_2': Dish_2 
            },
            {
                'img_1': Dish_2, 
                'img_2': Dish_3 
            },
            // {
            //     'img': Dish_3 
            // },
            // {
            //     'img': Dish_1 
            // },
        ]
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
                  <Grid container className={classes.grid}>
                    {this.data.map((item, index) => {
                        return (<Grid key={index} item lg={6} xs={12}>
                            <FoodBlock 
                                        image_1={item.img_1} 
                                        image_2={item.img_2} />
                        </Grid>)
                    })}
                  </Grid> 
                </div>
            </Paper>
        )
    }
}
BestFoods.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(BestFoods)