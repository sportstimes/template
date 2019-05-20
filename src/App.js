import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
