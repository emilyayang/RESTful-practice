import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: null,
      middle: null,
      last: null
    }
    this.getFirst = this.getFirst.bind(this);
    this.getMiddle = this.getMiddle.bind(this);
    this.getLast = this.getLast.bind(this);
  }

  componentDidMount() {
    this.getFirst();
    this.getMiddle();
    this.getLast();
  }

  getFirst() {
    axios.get('/api/getAFirstName')
      .then((response) => {
        this.setState({
          first: response.data[0].name
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getMiddle() {
    axios.get('/api/getAMiddleName')
      .then((response) => {
        this.setState({
          middle: response.data[0].name
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getLast() {
    axios.get('/api/getALastName')
      .then((response) => {
        this.setState({
          last: response.data[0].name
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    let { first, middle, last } = this.state;
    if (first !== null && middle !== null && last !== null) {
      return (
        <div>{first} {middle} {last}</div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default App;

export const Counter = ({ counter }) => (
  <div></div>

);