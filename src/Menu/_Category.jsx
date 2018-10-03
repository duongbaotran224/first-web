import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Tabs, Tab} from '@material-ui/core'
import FoodItem from './_FoodItem'
import {DATA} from './_Data'

const style = (theme) => {
  return({
    root: {
      width: '80%',
      boxSizing: 'border-box',
      padding: '0px 15px',
      margin: '3em auto 0 auto'
    },
    tabsRoot: {
      boxSizing: 'border-box',
      marginBottom: 80,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabRoot: {
      '&:hover': {
        color: '#ff7a5c',
        opacity: 1,
        backgroundColor: 'none'
      },
      '&$tabSelected': {
        color: '#ff7a5c',
        fontWeight: 500,
      },
      '&:focus': {
        color: '#ff7a5c',
      },
    },
    tabsIndicator: {
      backgroundColor: '#ff7a5c'
    },
    tabSelected: {}
  })
}

const NaviTab = (props) => {
  const {classes, value, handleChange} = props
  // console.log(props)
  return (
    <Tabs value={value}
          onChange={handleChange}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.tabsIndicator
          }}>
      <Tab label="BREAKFAST" disableRipple classes={{root: classes.tabRoot, selected: classes.tabSelected }}/>
      <Tab label="LUNCH" disableRipple classes={{root: classes.tabRoot, selected: classes.tabSelected }}/>
      <Tab label="DINNER" disableRipple classes={{root: classes.tabRoot, selected: classes.tabSelected }}/>
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
                            price={item.price}
                            classes={classes}
                            />)
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
