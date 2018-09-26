import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {Card, CardMedia, CardContent} from '@material-ui/core'

const style = (theme) => {
  return({
    root: {
      width: '95%',
      display: 'flex',
      flexDirection: 'row',
      boxSizing: 'border-box',
      margin: 'auto',
      boxShadow: 'none',
      background: 'none',
      borderBottom : '1px dotted #ccc',
      marginBottom: 30,
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column'
      },
    },
    image: {
      height: 150,
      width: 150,
      borderRadius: '100%',
      boxSizing: 'border-box',
      marginBottom: 30,
      [theme.breakpoints.down('xs')]: {
        margin: '0 auto 30px auto'
      },
    },
    wrap: {
      flex: 4,
      padding: '0 15px 30px 15px',
      boxSizing: 'border-box'
    },
    title: {
      fontFamily: 'Playfair Display, serif',
      fontSize: 22,
      textAlign: 'left',
      boxSizing: 'border-box',
      marginBottom: '1rem',
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center'
      },
    },
    content: {
      fontFamily: 'Quicksand, sans-serif',
      fontSize: 14,
      textAlign: 'left',
    },
    price: {
      fontFamily: 'Quicksand, sans-serif',
      fontSize: 14,
      flex: 1,
      padding: '0 15px',
      boxSizing: 'border-box',
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
        marginBottom: 30,
      },
    },
  })
}

class FoodItem extends React.Component {
  render() {
    const {classes, image, name, content, price} = this.props;
    // console.log('item', this.props)

    return (<Card className={classes.root}>
        <CardMedia className={classes.image} component='img' src={image}/>
        <CardContent className={classes.wrap}>
          <Typography className={classes.title}>{name}</Typography>
          <Typography className={classes.content}>
            {content}
          </Typography>
        </CardContent>
        <Typography className={classes.price}>{price}</Typography>
      </Card>)
  }
}
FoodItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(FoodItem)
