import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import Timetable from './components/timetable';
import FullTimetable from './components/fulltimetable'
import Announcements from './components/announcements';
import Settings from './components/settings';
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Timetable />}/>
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/full-timetable" element={<FullTimetable />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Navbar />
      </Router>
    </div>
  );
}

export default App;
