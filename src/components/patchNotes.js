import React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { withStyles } from '@mui/styles';

const styles = {
    button: {
        '&.MuiButton-root': {
            innerHeight: "48px",
            color: '#ECEFF4',
            background: '#3B4252',
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
        },
    },
}

function PatchNotes(props) {
    const [open, setOpen] = React.useState(false);
    const [remoteVersion, setRemoteVersion] = React.useState('');

    const handleClickOpen = () => {
        latestUpdate()
        setOpen(true);
    }

    const latestUpdate = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/JumpyJacko/resentral-react-cordova/main/package.json', {
                method: 'GET',
            })
            const placeholder = await response.json();
            setRemoteVersion(placeholder.version.toString());
        } catch (err) {
            console.log(err);
        }
    }

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <div>
            <div className="option">
                <div className="about-text">
                    Patch Notes
                    <div className="subtext">Check out patch notes of the latest version.</div>
                </div>
                <Button variant="filled" onClick={handleClickOpen} className={props.classes.button}>
                    View
                </Button>
                <Dialog open={open} onClose={handleClose} maxWidth="xs" 
                    PaperProps={{
                        style: {
                            backgroundColor: '#3B4252',
                            color: '#ECEFF4',
                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                        }
                    }}>
                    <DialogTitle>Patch Notes</DialogTitle>
                    <DialogContent>
                        <DialogContentText style={{color: '#A4A4A4', fontSize: '14px'}}>
                            v{remoteVersion}
                        </DialogContentText>
                        <DialogContentText style={{color: '#D7D7D7'}}>
                            Coming soon hopefully!
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

export default withStyles(styles)(PatchNotes);
