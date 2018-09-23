import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import style from './_Style.jsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Chef_1 from '../../src/Images/chef_1.jpg'
import Chef_2 from '../../src/Images/chef_2.jpg'
import {Card, CardContent, Avatar, IconButton} from '@material-ui/core';
import Category from './_Category'


class Menu extends React.Component {

  render() {
    const {classes} = this.props;

    return (<div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.title}>Menu</Typography>
        <Typography className={classes.desc}>
          {'Free Website Template For Restaurants Made by Tran'}
        </Typography>
        <Category/>
      </div>
    </div>)
  }
}
Menu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(Menu)
