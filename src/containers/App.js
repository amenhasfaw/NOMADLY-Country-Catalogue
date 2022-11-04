import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://restcountries.com/v3.1/all')
      .then(response=> response.json())
      .then(users => {this.setState({ countries: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { countries, searchfield } = this.state;
    console.log(this.state.countries)

    const filteredcountries = countries.filter(country =>{
      return country.name.common.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !countries.length ?
      <h1 className="f-headline tc" style={{height: '100vh'}}>Loading...</h1> :
      (
        <div className='tc'>
          <h1 className='f-subheadline'>Nomadly</h1>
          <h3 className='f5'>- - Country Catalogue - -</h3>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList countries={filteredcountries} />
          </Scroll>
        </div>
      );
  }
}

export default App;