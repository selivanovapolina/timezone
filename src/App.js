import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import timezone from 'moment-timezone';
import moment from 'moment';

class App extends Component {
  render() {
    const tzList = [ 'Europe/Stockholm', 'Asia/Omsk', 'America/New_York' ];
    const listItems = tzList.map((tz) => <option key={tz}>{tz}</option>);
    const convert = function(timeFrom, tzFrom, tzTo) {
      const localTime = moment.tz(timeFrom, tzFrom);
      return localTime.tz(tzTo).format();
    };

    const updateTime = function(){
      const timeFrom = document.getElementById("timeFrom").value;
      const e = document.getElementById("tzFrom");
      const tzFrom = e.options[e.selectedIndex].text;
      const d = document.getElementById("tzTo");
      const tzTo = d.options[d.selectedIndex].text;
      const convertedTime = convert(timeFrom, tzFrom, tzTo);
      const f = document.getElementById("convertedTime");
      f.innerText = convertedTime;
      console.log(convertedTime);

      return convertedTime;

      // 1. take value of timeFrom
      // 2. take value of tzFrom
      // 3. take value of tzTo
      // 4. invoke function `convert` with arguments 1, 2 & 3
      // 5. set value of `convertedTime` to result of `convert`
    };

    return (
      <div className="App">
        <script src="moment.js"></script>
        <script src="moment-timezone-with-data.js"></script>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Time Zone Converter</h1>
        </header>
        <p className="App-intro">
          To get started, choose a time zone.
        </p>

        <div>
           <select id="tzFrom">
             {listItems}
           </select>
           <input id="timeFrom" type="text" />
        </div>
        <div>
           <select id="tzTo">
             {listItems}
           </select>
           <span id="convertedTime" />
        </div>

        <button onClick={updateTime}>Click here</button>

     </div>
    );
  }
}

export default App;
