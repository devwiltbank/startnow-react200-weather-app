import axios from 'axios';
// create keys for different action types
export const types = {
    CITY_TO_SEARCH: 'CITY_TO_SEARCH',
    WEATHER_INFO: 'WEATHER_INFO',
    CITY_INPUT_TO_SEARCH: 'CITY_INPUT_TO_SEARCH',
    WEATHER_INFO_FULFILLED: 'WEATHER_INFO_FULFILLED'
}

// Actions
export function citySelected(selectedCity) {
    return {
        type: types.CITY_TO_SEARCH,
        payload: { selectedCity }
    };
}

export function cityManualInput(cityInput) {
    return {
        type: types.CITY_INPUT_TO_SEARCH,
        payload: { cityInput }
    };
}

export function getWeather(city) {
    console.log('getweather fired')
    return {
        type: types.WEATHER_INFO,
        payload: axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=430f298a7b1fe6ac274239d8eaee8545&units=imperial`)
        .then(respond => respond.data)
        .catch(err => console.log(err))
    }
};
  