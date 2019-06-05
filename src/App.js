import React from 'react';
import data from './Events.json';
import logo from './kickoff-outline-144.png';

import './App.css';

function App() {
  console.log(data);
  let events = data.events;

  const rows = events.map((item, key) => {              
    return <tr key={key} className="vevent">
        <td className="dtstart" title="{item.dateTimeStart}">
        {new Intl.DateTimeFormat('en-GB', { 
          year: 'numeric', 
          month: 'short', 
          day: '2-digit' 
        }).format( Date.parse(item.dateTimeStart) )}
        </td>
        <td className="dtend">
        {new Intl.DateTimeFormat('en-GB', { 
          hour12 : true,
          hour: 'numeric', 
          minute: '2-digit'
        }).format( Date.parse(item.dateTimeStart) )}
        </td>
        <th className="summary">{item.summary}</th>
    </tr>
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{data.name} Kick Off Times</h2>
        <table className="Events-list">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Summary</th>
            </tr>
          </thead>
          {rows}
        </table>
        <h3>What is this?</h3>
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
