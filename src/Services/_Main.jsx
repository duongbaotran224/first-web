import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import style from './_Style.jsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import {Soup} from './_SVGs'


class Services extends React.Component {

  data = [
    {
      icon: <Soup style={{width:"3em", height: '3em'}}/>,
      label: 'Quality Cuisine',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      icon: <Soup style={{width:"3em", height: '3em'}}/>,
      label: 'Fresh Food',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      icon: <Soup style={{width:"3em", height: '3em'}}/>,
      label: 'Bread & Pancake',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      icon: <Soup style={{width:"3em", height: '3em'}}/>,
      label: 'Reserve Now',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      icon: <Soup style={{width:"3em", height: '3em'}}/>,
      label: 'Fresh Vegies Salad',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
    {
      icon: <Soup style={{width:"3em", height: '3em'}}/>,
      label: 'Whole Chicken',
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    },
  ]

  render() {
    const {classes} = this.props;

    return (<div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.title}>Other Services</Typography>
        <Typography className={classes.desc}>
          {'Free Website Template For Restaurants Made by Tran'}
        </Typography>
        <Grid container className={classes.grid}>
            {this.data.map((item, index) => {
              return <Grid item xs={12} md={6} lg={4} className={classes.grid_item}>
                {item.icon}
                <Typography className={classes.label}>{item.label}</Typography>
                <Typography className={classes.content}>{item.content}</Typography>
              </Grid>
            })}
        </Grid>
      </div>
    </div>)
  }
}
Services.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(Services)
