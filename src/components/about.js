import React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { withStyles } from '@mui/styles';

import info from './version.js';

const styles = {
    button: {
        '&.MuiButton-root': {
            color: '#ECEFF4',
            background: '#3B4252',
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
        },
    },
}

function About(props) {
    const [open, setOpen] = React.useState(false);
    const [version, setVersion] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
        getVersion();
    }

    const handleClose = () => {
        setOpen(false);
    }

    const getVersion = async () => {
        setVersion(info.version)
    }

    return(
        <div>
            <div className="option">
                <div className="about-text">
                    About
                    <div className="subtext">Information about this app.</div>
                </div>
                <Button variant="filled" onClick={handleClickOpen} className={props.classes.button}>
                    Show
                </Button>
                <Dialog open={open} onClose={handleClose} maxWidth="xs" 
                    PaperProps={{
                        style: {
                            backgroundColor: '#3B4252',
                            color: '#ECEFF4',
                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                        }
                    }}>
                    <DialogTitle>About</DialogTitle>
                    <DialogContent>
                        <DialogContentText style={{color: '#A4A4A4', fontSize: '14px'}}>
                            Version: {version}
                        </DialogContentText>
                        <DialogContentText style={{color: '#D7D7D7'}}>
                            This app is developed by Jackson Ly (JumpyJacko) and is meant to serve as a Sentral replacement and mobile client.
                            <br />
                            <br />
                            Created fairly inefficiently with React and made into a mobile app using Cordova.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} style={{color: "#ECEFF4"}}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default withStyles(styles)(About);
