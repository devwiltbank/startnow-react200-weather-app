import React from 'react';
import { citySelected, getWeather, cityManualInput } from './searchAction';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.HandleButtonSelect = this.HandleButtonSelect.bind(this);
        this.HandleApiCall = this.HandleApiCall.bind(this);
        this.HandleCityInput = this.HandleCityInput.bind(this);
    }

    HandleButtonSelect(event) {
        const { dispatch } = this.props;
        const preCity = event.target.id;
        dispatch(getWeather(preCity));
    }

    HandleApiCall() {
        const { cityInput, dispatch } = this.props;
        dispatch(getWeather(cityInput));
    }

    HandleCityInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
    console.log('HandleCityInput', value)
        dispatch(cityManualInput(value));
    }


    render () {
        return (
            <div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button onClick={ this.HandleButtonSelect } 
                            value='San Diego' 
                            id='san%20diego' 
                            type="button" 
                            className="btn btn-secondary"
                            >San Diego
                    </button>
                    <button onClick={ this.HandleButtonSelect }
                            value='Sherwood'
                            id='sherwood'
                            type="button"
                            className="btn btn-secondary"
                            >Sherwood
                    </button>
                    <button onClick={ this.HandleButtonSelect }
                            value='Sacramento' 
                            id='sacramento' 
                            type="button" 
                            className="btn btn-secondary"
                            >Sacramento
                    </button>
                    <button onClick={ this.HandleButtonSelect }
                            value='Palm Desert' 
                            id='palm%20desert' 
                            type="button" 
                            className="btn btn-secondary"
                            >Palm Desert
                    </button>
                    <button onClick={ this.HandleButtonSelect }
                            value='St. George' 
                            id='st.%20george' 
                            type="button" 
                            className="btn btn-secondary"
                            >St. George
                    </button>
                    <button onClick={ this.HandleButtonSelect }
                            value='Salt Lake' 
                            id='salt%20lake' 
                            type="button"
                            className="btn btn-secondary"
                            >Salt Lake
                    </button>
                </div>
               <div className="input-group mb-3">
                 <input onChange={ this.HandleCityInput } type="text" className="form-control" id='user' placeholder="Enter a city" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                   <div className="input-group-append">
                    <button onClick={ this.HandleApiCall } className="btn btn-outline-secondary" type="button">Get weather</button>
                   </div>
               </div>
                             
              
            </div>
        );
    }
}