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

function Clear(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClear = () => {
        window.localStorage.clear();
        setOpen(false);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <div>
            <div className="option">
                <div className="about-text">
                    Clear Info
                    <div className="subtext">Clear all info from localStorage.</div>
                </div>
                <Button variant="filled" onClick={handleClickOpen} className={props.classes.button}>
                    Clear
                </Button>
                <Dialog open={open} onClose={handleClose} maxWidth="xs" 
                    PaperProps={{
                        style: {
                            backgroundColor: '#3B4252',
                            color: '#ECEFF4',
                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                        }
                    }}>
                    <DialogTitle>Clear data?</DialogTitle>
                    <DialogContent>
                        <DialogContentText style={{color: '#D7D7D7'}}>
                            <p>This will clear every thing that is stored in localStorage (see <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" style={{ display: 'inline' }}>here</a>).</p>
                            This includes username and password, saved timetables, etc.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClear} style={{color: "#ECEFF4"}}>Clear</Button>
                        <Button onClick={handleClose} style={{color: "#ECEFF4"}}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default withStyles(styles)(Clear);
