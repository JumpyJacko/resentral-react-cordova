import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Dots from 'react-activity/dist/Dots';
import 'react-activity/dist/Dots.css';
import FlatList from 'flatlist-react';
import '../App.css';

import login from './login.js';

class Announcements extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            responseStatus: false,
            isLoading: true,
        }
    }

    async getAnnouncements() {
        try {
            let uuid = uuidv4();
            const response = await fetch('https://resentral-server.herokuapp.com/api/announcements/' + uuid, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: new TextEncoder().encode(
                    JSON.stringify({
                        username: login.username,
                        password: login.password
                    })
                ),
            })
            await fetch('https://resentral-server.herokuapp.com/api/announcements/' + uuid, {
                method: 'DELETE',
            });
            const timetable = await response.json();
            new Promise(resolve => setTimeout(resolve, 5000));
            this.setState({ data: timetable.response });
        } catch (err) {
            console.error(err);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    componentDidMount() {
        this.getAnnouncements();
    }

    htmlDecode(input) {
        let e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    renderContent(data) {
        let content = [];
        for (let i = 0; i < data.length; i++) {
            content.push(
                    <div className="announcement-card">
                        <div className="announcement-side-block"></div>
                        <div className="announcement-text">
                            <div className="announcement-title">{data[i].title}</div>
                            <div className="announcement-author">{data[i].author}</div>
                            <div className="announcement-body" dangerouslySetInnerHTML={{ __html: data[i].body }}></div>
                        </div>
                    </div>
            );
        }
        return content;
    }

    render() {
        const { data, isLoading } = this.state;
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

        return(
            <div className="container">
                <div className="header">
                    <div className="timetable-title">Today's Annoucements</div>
                    <div className="dayoftheweek">{weekday[new Date().getDay()]}</div>
                </div>
                {isLoading ? <Dots /> : (
                    <FlatList 
                        list={data}
                        renderItem={() => (
                            <div className="announcement-container">
                                {this.renderContent(data)}
                            </div>
                        )}
                        renderWhenEmpty={() => <div>No annoucements for today.</div>}
                        limit={1}
                    />
                )}
            </div>
        )
    }
}

export default Announcements;
