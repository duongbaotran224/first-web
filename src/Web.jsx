import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Header from './Header/_Main'
import BestFoods from './BestFoods/_Main'
import Restaurant from './Restaurant/_Main'
import Team from './Team/_Main'
import Menu from './Menu/_Main'
import Services from './Services/_Main'

const styles ={
    root: {
        width: '100%',
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
                <BestFoods/>
                <Restaurant/>
                <Team/>
                <Menu/>
                <Services/>
            </div>
        )
    }
}

Web.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Web)
