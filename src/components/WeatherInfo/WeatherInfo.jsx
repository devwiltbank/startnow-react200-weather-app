import React from 'react';

export default class WeatherInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        const {
            temperature,
            pressure, 
            humidity, 
            lowTemp, 
            highTemp, 
            lat, 
            lon, 
            windSpeed, 
            city, 
            weatherIcon,
        } = this.props;

         return (
            <div className="content card left-panel">
                <h3 className="content title card-header left-panel-border">City Information</h3>
                <div className="content card-block text-center">
                <div className="top-panel">
                    <div>
                    {/* <img className="content weather-icon" src={weatherIcon} alt="icon"/> */}
                    <h3 className="content card-title">{city}</h3>
                    </div>
                    <p className="content card-text">Lat/Long: {lat},{lon}</p>
                </div>
                <div className="bottom-panel">
                    <div className="top-three">
                    <div className="content top-flex">
                        <h5>Temperature</h5>
                        <strong className="green-text">{temperature}</strong>
                    </div>
                    <div className="content top-flex">
                        <h5>Pressure</h5>
                        <strong className="content green-text">{pressure}</strong>
                    </div>
                    <div className="content top-flex">
                        <h5>Humidity</h5>
                        <strong className="green-text">{humidity}</strong>
                    </div>
                    </div>
                    <div className="bottom-three">
                    <div className="content bottom-flex">
                        <h5>Lowest Temp</h5>
                        <strong className="green-text">{lowTemp}</strong>
                    </div>
                    <div className="content bottom-flex">
                        <h5>Highest Temp</h5>
                        <strong className="green-text">{highTemp}</strong>
                    </div>
                    <div className="content bottom-flex">
                        <h5>Wind Speed</h5>
                        <strong className="green-text">{windSpeed}</strong>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
