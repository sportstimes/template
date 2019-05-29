import React from 'react';
import data from './Events.json';
import logo from './kickoff-outline-144.png';

import './App.css';

function App() {
  console.log(data);
  let events = data.events;

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
        <table className="Events-list">
          {
            events.map((item, key) => {              
              return <tr key={key} className="vevent">
                  <td className="dtstart" title="{item.dateTimeStart}">{item.dateTimeStart}</td>
                  <th className="summary">{item.summary}</th>
                  <th className="location">{item.locationName}</th>
              </tr>
            })
          }
        </table>
      </header>
    </div>
  );
}

export default App;
