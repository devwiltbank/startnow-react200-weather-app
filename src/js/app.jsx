import React from 'react';
import WeatherInfo from '../components/WeatherInfo';
import Search from '../components/Search';
import History from '../components/History';

export default class App extends React.Component {
  render() {
    return (
    <div className='background'>
      <div className='container'>
       <div className='jumbotron mt-2'>
        <h1>Origin Weather Application</h1>
        <h6>Always know if you'll need an umbrella!</h6>
       </div>
       <Search />
        <div className='row'>
          <div className='title col-12 col-md-6 mb-4'>
            <WeatherInfo />
          </div>
          <div className='title col-12 col-md-6 mb-4'>
            <History />
          </div>
        </div>
        </div>
      </div>

       
    );
  }
}
