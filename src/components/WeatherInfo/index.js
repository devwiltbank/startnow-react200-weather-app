import {connect} from 'react-redux'
import WeatherInfo from './WeatherInfo'

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
    return {
      city: store.search.city,
      lat: store.search.lat,
      lon: store.search.lon,
      temperature: store.search.temperature,
      pressure: store.search.pressure,
      humidity: store.search.humidity,
      lowTemp: store.search.lowTemp,
      highTemp: store.search.highTemp,
      windSpeed: store.search.windSpeed,
      weatherIcon: store.search.weatherIcon
    };
}

// This might look odd, but connect returns a function,
// that is then called with the component itself.

export default connect(mapStoreToProps)(WeatherInfo);

