import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import style from './_Style.jsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Chef_1 from '../../src/Images/chef_1.jpg'
import Chef_2 from '../../src/Images/chef_2.jpg'
import {Facebook} from './_SVGs.jsx'
import {Card, CardContent, Avatar, IconButton} from '@material-ui/core';

const data = [
  {
    image: Chef_1,
    name: 'Daniel Graham',
    position: 'MASTER CHEF',
    desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
  },
  {
    image: Chef_2,
    name: 'Daniel Graham',
    position: 'MASTER CHEF',
    desc: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
  }
]

const GridList = (props) => {
  const {classes} = props;
  return (<Grid container className={classes.grid}>
    {
      data.map((item, index) => {
        return (<Grid key={index} item sm={6} xs={12}>
          <Card className={classes.grid_item}>
            <Avatar src={item.image} className={classes.image}/>
            <CardContent>
              <Typography className={classes.name}>
                {item.name}
              </Typography>
              <Typography className={classes.position}>
                {item.position}
              </Typography>
              <Typography className={classes.desc}>
                {item.desc}
              </Typography>
              <IconButton className={classes.button}>
                <Facebook className={classes.icon}/>
              </IconButton>
              <IconButton className={classes.button}>
                <Facebook className={classes.icon}/>
              </IconButton>
              <IconButton className={classes.button}>
                <Facebook className={classes.icon}/>
              </IconButton>
            </CardContent>
          </Card>
        </Grid>)
      })
    }
  </Grid>)
}

class Team extends React.Component {

  render() {
    console.log("ppp", this.props)
    const {classes} = this.props;

    return (<div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.title}>Meet The Chefs</Typography>
        <GridList classes={classes}/>
      </div>
    </div>)
  }
}
Team.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(Team)
