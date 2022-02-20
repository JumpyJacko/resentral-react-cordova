import React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { withStyles } from '@mui/styles';

const styles = {
    button: {
        '&.MuiButton-root': {
            color: '#ECEFF4',
            background: '#3B4252',
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
        },
    },
}

function Login(props) {
    const [open, setOpen] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    let [login, setLogin] = React.useState({
        username: '',
        password: ''
    });

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleLogin = () => {
        window.localStorage.setItem('username', login.username);
        window.localStorage.setItem('password', login.password);
        setOpen(false);
    }

    function handleChange(e) {
        const value = e.target.value;
        setLogin({
            ...login,
            [e.target.id]: value
        });
    };

    return(
        <div>
            <div className="option">
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
                            onChange={handleChange}
                            id="username"
                            label="Username"
                            type="text"
                            fullWidth
                            variant="standard"
                            margin="normal"
                            InputProps={{
                                style: {
                                    color: '#ECEFF4',
                                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    color: '#A8A8A8',
                                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                },
                            }}
                        />
                        <TextField
                            onChange={handleChange}
                            id="password"
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            fullWidth
                            variant="standard"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            style={{ color: "#ECEFF4" }}
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                style: {
                                    color: '#ECEFF4',
                                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    color: '#A8A8A8',
                                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                },
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

export default withStyles(styles)(Login);
