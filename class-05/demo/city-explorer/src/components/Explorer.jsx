import React from 'react';
import weather from '../assets/data/weather.json';
import { Link } from 'react-router-dom';

class Explorer extends React.Component {

  render() {
    return (
      <main>
        <Link to="/">Go Home</Link>
        <section>
          <h2>Maps</h2>
          <p>{this.props.query}</p>
          <img src="https://placehold.co/600x400" alt="placeholder map image" />
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
