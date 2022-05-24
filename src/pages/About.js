import React from 'react';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    mainDiv: {
        paddingLeft: 100,
        paddingTop: 80,
    },
});

class AboutPage extends React.Component{
    render(){

        const { classes, theme } = this.props;

        return(
            <div className={classes.mainDiv}>
               <h1>This is About Page!!</h1>
            </div>
        )
    }
}

export default withStyles(styles)(AboutPage);