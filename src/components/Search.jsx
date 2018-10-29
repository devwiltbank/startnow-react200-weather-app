import React, { Component } from 'react';

export class Search extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        return (
            <div className='container'>
                <form>
                    <div className="form-group row">
                     <label for="colFormLabel" className="col-sm-2 col-form-label">Search component</label>
                       <div className="col-sm-10">
                          <input type="text" className="form-control" id="colFormLabel" placeholder="Enter a City"></input>
                       </div>
                    </div>
                </form>
            </div>
        );
    }
}