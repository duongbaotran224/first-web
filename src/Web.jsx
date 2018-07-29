import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles ={
    "root": {
        backgroundColor: 'red',
        animationName: 'fading',
        animationDuration: '4s' 
    },
    '@keyframes fading': {
        from: {
            width: '0%',
            opacity: 0
        },
        to: {
            width: '100%',
            opacity: 1
        }
    }
}

class Web extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>'ABC'</div>
        )
    }
}
Web.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Web)