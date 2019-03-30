import React, { Component } from 'react';
import { getChannels, getMovies, getMovieImagesByID } from '../../services/fetch.js'
import './Sandbox.css';

class Sandbox extends Component {
  constructor() {
    super()
    this.state = {
      posters: []
    }
  }

  getGenresTest = () => {
    getMovieImagesByID(153664)
      .then(results => this.cleanPosters(results.results.posters))
  }

  cleanPosters = (postersArray) => {
    let postersObj = postersArray.reduce((acc,item) => {
      console.log('item', item);
      
      if (!acc[item]) {
        acc[item] = 0
      }

    },{})
  }

  render() {
    this.getGenresTest()
    return (
      <div className="App">

      </div>
    );
  }
}

export default Sandbox;
