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
function Update(props) {
    const [open, setOpen] = React.useState(false);
    const [isLatest, setIsLatest] = React.useState();
    const [remoteVersion, setRemoteVersion] = React.useState('');

    const handleClickOpen = () => {
        hasLatestUpdate();
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const hasLatestUpdate = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/JumpyJacko/resentral-react-cordova/main/package.json', {
                method: 'GET',
            })
            const placeholder = await response.json();
            setRemoteVersion(placeholder.version);
            const local_version = info.version;
            if (remoteVersion === local_version) {
                setIsLatest(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <div>
            <div className="option">
                <div className="about-text">
                    Update
                    <div className="subtext">Check for latest update.</div>
                </div>
                <Button variant="filled" onClick={handleClickOpen} className={props.classes.button}>
                    Update
                </Button>
                <Dialog open={open} onClose={handleClose} maxWidth="xs" 
                    PaperProps={{
                        style: {
                            backgroundColor: '#3B4252',
                            color: '#ECEFF4',
                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                        }
                    }}>
                    <DialogTitle>Update</DialogTitle>
                    { isLatest ? (
                        <DialogContent>
                            <DialogContentText style={{color: '#D7D7D7'}}>Up to date! (v{info.version})</DialogContentText>
                        </DialogContent>
                    ) : (
                        <DialogContent>
                            <DialogContentText style={{color: '#D7D7D7'}}>
                                New version(?) (current: v{info.version}, new: v{remoteVersion})
                                <br />
                                <br />
                                <a href="https://github.com/JumpyJacko/resentral-react-cordova/releases">Download it</a>
                            </DialogContentText>
                        </DialogContent>
                    )}
                    <DialogActions>
                        <Button onClick={handleClose} style={{color: "#ECEFF4"}}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default withStyles(styles)(Update);
