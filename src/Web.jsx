import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Header from './Header/_Main'

const styles ={
    root: {
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        // animationName: 'fading',
        // animationDuration: '4s' 
    },
    // '@keyframe fading': {
    //     from: {
    //     width: '0%',
    //         opacity: 0
    //     },
    //     to: {
    //         width: '100%',
    //         opacity: 1
    //     }
    // }
}

class Web extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Header/>
            </div>
        )
    }
}

Web.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Web)