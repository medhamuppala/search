import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class AutoSuggestion extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <input type="text" placeholder={this.props.plchold} />;
  }
}

class Search extends Component {
  render() {
    return <button>Search</button>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

 this.state = {
    startDate: new Date(),
    secondDate : new Date()
  };
}

  handleChange = date => {this.setState({startDate: date});};
  handleSecond = date => {this.setState({secondDate: date});};

  render() {
    return (
      <body style={{textAlign: 'center'}}>
      <div>
        <h1>Make a Booking</h1>
        <AutoSuggestion plchold="From" />
        <AutoSuggestion plchold="Destination" />
        <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange} />
        <DatePicker
        selected={this.state.secondDate}
        onChange={this.handleSecond} />
        <Search />

      </div>
      </body>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
export default App;
