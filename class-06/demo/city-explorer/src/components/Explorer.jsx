import React from 'react';
import weather from '../assets/data/weather.json';
import { Link } from 'react-router-dom';

let API_KEY = `KEYFROMENV`;

class Explorer extends React.Component {

  render() {

    let { location } = this.props;

    // let staticMapUrl = `https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}$zoom=9`;

    return (
      <main>
        <Link to="/">Go Home</Link>
        <section>
          <h2>Maps</h2>
          <p>{this.props.query}</p>
          <p>City: {location ? location.display_name : 'No location set'}</p>
          <p>URL FOR MAP: PLACEHOLDER</p>
          <img src={location ? location.icon : "https://placehold.co/600x400" }alt="placeholder map image" />
        </section>
        <section>
          <ul>
          {weather.data.map((dailyForcast, index) => (
            <li key={index}>
              <p>{dailyForcast.datetime}</p>
              <p>{dailyForcast.temp}</p>
            </li>
          ))}
          </ul>
        </section>
      </main>
    )
  }
}

export const test = 'banana';

export default Explorer;
