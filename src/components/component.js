import React from 'react';
import Button from '@material-ui/core/Button';

const Compo = (props) => {
    return(
        <div> 
            <Button variant="contained" color="primary" onClick={props.changeAction}>Change</Button>
        </div>
    )
}

export default Compo;