import React from 'react';

const api_key = import.meta.env.VITE_API_KEY;

class Map extends React.Component {
    constructor() {
        super();
    }
    

    render() {
        let staticMapUrl = `https://maps.locationiq.com/v3/staticmap?key=${api_key}&center=${this.props.location.lat},${this.props.location.lon}&zoom=9`;
        return (
            <img src={staticMapUrl}></img>
      
            
        );
    }
}

export default Map;