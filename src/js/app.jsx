import React from 'react';
import { CityInformation } from '../components/CityInformation';
import { Search } from '../components/Search';
import { History } from '../components/History';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
       <div className='jumbotron mt-2'>
        <h1>Origin Weather Application</h1>
        <h6>Always know if you'll need an umbrella!</h6>
       </div>
      <Search />
      <CityInformation />
      <History />
      </div>
    );
  }
}
