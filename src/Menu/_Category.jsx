import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {Tabs, Tab} from '@material-ui/core'
import FoodItem from './_FoodItem'
import {DATA} from './_Data'

const style = (theme) => {
  return({
    root: {
      width: '80%',
      boxSizing: 'border-box',
      padding: '0px 15px',
      margin: '3em auto'
    },
  })
}

const NaviTab = (props) => {
  const {classes, value, handleChange} = props
  return (
    <Tabs value={value}
          onChange={handleChange}
          style={{
            boxSizing: 'border-box',
            marginBottom: 80,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',

          }}>
      <Tab label="BREAKFAST"/>
      <Tab label="LUNCH"/>
      <Tab label="DINNER"/>
    </Tabs>
  )
}

class ListItem extends React.Component {
  render() {
    const {classes, data} = this.props;
    return (
      <div>
        {data.foods.map((item, index) => {
          return (<FoodItem key={index}
                            image={item.image}
                            name={item.name}
                            content={item.content}
                            price={item.price}/>)
          })}
        </div>
    )
  }
}

class Category extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({value})
  }

  render() {
    const {classes} = this.props;
    const {value} = this.state

    return (<div className={classes.root}>
      <NaviTab value={value} handleChange={this.handleChange} classes={classes}/>
      {value===0 && <ListItem data={DATA[0]}></ListItem>}
      {value===1 && <ListItem data={DATA[1]}></ListItem>}
      {value===2 && <ListItem data={DATA[2]}></ListItem>}
    </div>)
  }
}
Category.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(Category)
