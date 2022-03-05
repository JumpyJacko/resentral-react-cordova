import React from 'react';
import '../App.css';
import Login from './login';
import About from './about';
import PatchNotes from './patchNotes';
import Update from './update';
import Clear from './clear';

function Settings(props) {
    return(
        <div>
            <div className="timetable-title">Settings</div>
            <Login />
            <Clear />
            <div style={{ textAlign: "center", fontSize: "20px" }}> ----- </div>
            <About />
            <PatchNotes />
            <Update />
        </div>
    )
}

export default Settings;
