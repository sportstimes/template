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
        <td className="summary">{item.summary}</td>
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
        <ul className="Explain-group">
          <li className="Explain-microformats"><strong>Microformats</strong> for people</li>
          <li className="Explain-ics"><strong><abbr title="iCalendar">ICS</abbr></strong> for calendars</li>
          <li className="Explain-rss"><strong><abbr title="Really Simple Syndication">RSS</abbr></strong> for sharing</li>
          <li className="Explain-jsonld"><strong><abbr title="JavaScript Object Notation Linked Data">JSON-LD</abbr></strong> for <abbr title="Search Engine Results Page">SERP</abbr></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
