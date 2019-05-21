import React from 'react';
import logo from './kickoff-outline-144.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Kick Off Times</h2>
        <p>Start times for sport events using open data formats</p>
        <ul className="explain--group">
          <li className="explain--microformats"><strong>Microformats</strong> for people</li>
          <li className="explain--ics"><strong><abbr title="">ICS</abbr></strong> for calendars</li>
          <li className="explain--rss"><strong><abbr title="Really Simple Syndication">RSS</abbr></strong> for sharing</li>
          <li className="explain--jsonld"><strong><abbr title="JavaScript Object Notation Linked Data">JSON-LD</abbr></strong> for <abbr title="Search Engine Results Page">SERP</abbr></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
