import React from 'react';
import data from './Events.json';
import logo from './kickoff-outline-144.png';
import eventSummary from './EventSummary.js';

import './App.css';

function App() {
  console.log(data);
  let events = data.events;
  let eventsList  = React.createElement('div', null, )
  events.forEach(element => {
    
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Kick Off Times</h2>
        <p>Start times for sport events using open data formats</p>
        <ul>
          <li>Structured Data (for SERP)</li>
          <li>Microformats (for people)</li>
          <li>RSS (for syndication)</li>
          <li>ICS (for calendar subscriptions)</li>
        </ul>
      </header>

    </div>
  );
}

export default App;
