import React from 'react';
import '../App.css';
import Login from './login';
import About from './about';
import Update from './update';

function Settings(props) {
    return(
        <div>
            <div className="timetable-title">Settings</div>
            <Login />
            <About />
            <Update />
        </div>
    )
}

export default Settings;
