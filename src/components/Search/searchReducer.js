import {types} from './searchAction';

const defaultState = {
    city:'' ,
    lat: '',
    lon: '',
    temperature: + 'F',
    pressure: '',
    humidity: + '%',
    lowTemp: + 'F',
    highTemp: + 'F',
    windSpeed: + 'mph',
    weatherIcon: '',
    historyListItem: []
  };  

export default function SearchReducer (state = defaultState, action) {
    const { type, payload } = action;

  switch (type) {
 
    case types.CITY_TO_SEARCH: {
      // we'll return an object
      return {
        // with all the previous state
        ...state,
        // but overwriting the city
        city: payload.selectedCity
      }
    }
    case types.CITY_INPUT_TO_SEARCH: {
      return {
        ...state,
        cityInput: payload.cityInput
      }
    }
    case `${types.WEATHER_INFO}_PENDING`: {
      console.log('pending');
      return {
        ...state,
      }
    }
    case `${types.WEATHER_INFO}_FULFILLED`: {
      const { historyListItem } = state;
      var date = new Date();
      var history = {
          city: payload.name,
          date: date.toLocaleDateString(),
          time: date.toLocaleTimeString()
      };
    //   if (historyListItem) {
    //       const newHistory = history;
    //       history = state.historyListItem.slice();
    //       history.push(newHistory);
    //   }
console.log(payload)
      return {
          ...state,
          city: payload.name,
          lat: payload.coord.lat,
          lon: payload.coord.lon,
          temperature: payload.main.temp + 'F',
          pressure: payload.main.pressure,
          humidity: payload.main.humidity + '%',
          lowTemp: payload.main.temp_min + 'F',
          highTemp: payload.main.temp_max + 'F',
          windSpeed: payload.wind.speed + 'mph',
          historyListItem: [history, ...state.historyListItem]
      }
    }
    default: {
      return state;
    }
  }
}


  
  