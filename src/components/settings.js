import React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { withStyles } from '@mui/styles';

const styles = {
    button: {
        '&.MuiButton-root': {
            color: '#ECEFF4',
            background: '#3B4252',
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
        },
    },
    inputroot: {
        background: "#3B4252",
    },
    input: {
        color: "#ECEFF4",
    }
}

function Settings(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleLogin = () => {
        setOpen(false);
    }

    return(
        <div>
            <div className="header">
                <div className="timetable-title">Settings</div>
            </div>
            <div className="login">
                <div className="login-text">
                    Sentral Login
                    <div className="subtext">This is stored locally.</div>
                </div>
                <Button variant="filled" onClick={handleClickOpen} className={props.classes.button}>
                    Edit
                </Button>
                <Dialog open={open} onClose={handleClose} maxWidth="xs" 
                    PaperProps={{
                        style: {
                            backgroundColor: '#3B4252',
                            color: '#ECEFF4',
                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                        }
                    }}>
                    <DialogTitle>Sentral Login</DialogTitle>
                    <DialogContent>
                        <DialogContentText style={{color: '#D7D7D7'}}>
                            Please enter your Sentral login.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            id="username"
                            label="Username"
                            type="username"
                            className={props.classes.inputroot}
                            fullWidth
                            multiline
                            variant="standard"
                            required
                            InputProps={{
                                className: props.classes.input
                            }}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            className={props.classes.inputroot}
                            fullWidth
                            multiline
                            variant="standard"
                            required
                            InputProps={{
                                className: props.classes.input
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} style={{color: "#ECEFF4"}}>Cancel</Button>
                        <Button onClick={handleLogin} style={{color: "#ECEFF4"}}>Save</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default withStyles(styles)(Settings);
