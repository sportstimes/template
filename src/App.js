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
    <script type="application/ld+json">
    [{
      "@context": "http://schema.org",
      "@type": "TestEvent",
      "name": "Kick Off Times Test",
      "startDate": "2019-11-13T19:30",
      "location": {
         "@type": "Place",
         "name": "Wembley",
         "address": "London, UK"
      },
      "offers": {
         "@type": "Offer",
         "url": "https://www.etix.com/ticket/1771656"
      }
    }
    ]
    </script>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{data.name} Kick Off Times</h2>
        
        <ul className="Calendar-actions">
          <li><a href="#">Add to Calendar</a></li>
          <li><a href="#">Subscribe to RSS</a></li>
        </ul>
        
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
        <div className="Events-detail vevent">
          
          <h2 className="summary">[insert event summary]</h2>
          <h3 className="dtstart dtstamp">[insert start time]</h3>

          <div className="Events-location">
            <p className="location">[insert location]</p>
            <div>[insert map view]</div>
          </div>

          <ul className="Events-actions">
            <li><a href="#">Add to Calendar</a></li>
            <li><a href="#">Share</a></li>
          </ul>

        </div>
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
