import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import style from './_Style.jsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Dish_1 from '../../src/Images/img_1.jpg'
import { CardMedia } from '@material-ui/core';

class Restaurant extends React.Component {
  data = [
    {
      block_1: {
        // 'img_1': Dish_1,
        'title_1': 'VEGIES',
        'subtitle_1': 'BEEF EMPANADAS',
        'content_1': 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean'
      },
      block_2: {
        // 'img_2': Dish_3,
        'title_2': 'FOOD',
        'subtitle_2': 'CHICKEN CHIMICHURRI CROQUETTES',
        'content_2': 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language oceanEven the all-powerful Pointing has no control about the blind texts.'
      },
    },
    {
      block_1: {
        // 'img_1': Dish_2,
        'title_1': 'FOOD',
        'subtitle_1': 'CHICKEN CHIMICHURRI CROQUETTES',
        'content_1': 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean'
      },
      block_2: {
        // 'img_2': Dish_1,
        'title_2': 'VEGIES',
        'subtitle_2': 'BUTTERMILK CHICKEN JIBARITOS',
        'content_2': 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language oceanA small river named Duden.'
      },
    },
  ]

  render () {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.wrap_title}>
            <Typography className={classes.title}>
              {'The Restaurant'}
            </Typography>
            <Typography className={classes.subtitle}>
              <span>Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia,
                there live the blind texts. </span>
              <span>Separated they live in Bookmarksgrove right at
                the coast of the Semantics,
                a large language ocean.</span>
              <p>It is a paradisematic country, in which
                roasted parts of sentences fly into your mouth</p>
            </Typography>
          </div>
        </div>
        <Grid container spacing={16} className={classes.grid}>
          <Grid item xs= {2} className={classes.col_0}>
            <CardMedia image={Dish_1}/>
            <CardMedia image={Dish_1}/>
          </Grid>
          <Grid item xs= {2} className={classes.col_1}></Grid>
          <Grid item xs= {4} className={classes.col_2}></Grid>
          <Grid item xs= {3} className={classes.col_3}></Grid>
          <Grid item xs= {1} className={classes.col_4}></Grid>
        </Grid>
      </div>
    )
  }
}
Restaurant.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Restaurant)
