import React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import ListIcon from '@mui/icons-material/List';
import TuneIcon from '@mui/icons-material/Tune';
import DateRangeIcon from '@mui/icons-material/DateRange';

import { withStyles } from '@mui/styles';

import { Link } from 'react-router-dom';

const styles = {
    root: {
        width: '100%',
        position: 'fixed',
        height: '150px',
        bottom: 0,
        '&.MuiBottomNavigation-root': {
            boxShadow: "0px -4px 6px rgba(0, 0, 0, 0.3)",
            background: "#434C5E"
        },
    },
    navButton: {
        '&.MuiBottomNavigationAction-root, .MuiBottomNavigationAction-label': {
            color: '#ECEFF4',
        },
        filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5))',
    },
    icon: {
        color: '#ECEFF4',
        width: '48px',
        height: '48px',
    }
};

function Navbar(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
        
    return (
        <BottomNavigation value={value} style={{ height: '85px' }} className={props.classes.root} onChange={handleChange}>
            <BottomNavigationAction disableRipple component={Link} to={'/'} className={props.classes.navButton} label="•" value="timetable" icon={<DashboardIcon className={props.classes.icon} fontSize='large' />} />
            <BottomNavigationAction disableRipple component={Link} to={'/announcements'} className={props.classes.navButton} label="•" value="announcements" icon={<ListIcon className={props.classes.icon} fontSize='large' />} />
            <BottomNavigationAction disableRipple component={Link} to={'/full-timetable'} className={props.classes.navButton} label="•" value="full-timetable" icon={<DateRangeIcon className={props.classes.icon} fontSize='large' />} />
            <BottomNavigationAction disableRipple component={Link} to={'/settings'} className={props.classes.navButton} label="•" value="settings" icon={<TuneIcon className={props.classes.icon} fontSize='large' />} />
        </BottomNavigation>
    );
};

export default withStyles(styles)(Navbar);
