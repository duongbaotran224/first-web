import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types'; 
import Typography from '@material-ui/core/Typography';
import { GridListTile, GridListTileBar } from '@material-ui/core';

const style = (theme) => {
    return({
        root: {
            flexGrow: 1,
            height: '800px',
            // display: 'flex',
            // flexDirection: 'column-reverse'
        },
        image: {
            width: '100%',
            height: '400px',
            backgroundColor:'red',
            // bottom: 0
        },
        desc: {
            // top: 0,
            width: '100%',
            height: '400px',
            backgroundColor:'grey',
        }
    })
}

class FoodBlock extends React.Component {
    render () {
        const {classes} = this.props;
        return (
            <GridListTile className={classes.root}>
               <GridListTileBar className={classes.desc}/>
               <img className={classes.image}/>
            </GridListTile>
        )
    }
}
FoodBlock.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(FoodBlock)