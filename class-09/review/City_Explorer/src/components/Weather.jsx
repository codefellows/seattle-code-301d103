import React from "react";

const Weather = ({ forecastData }) => {
    return (
      <div className="container">
        <h2>Weather Forecast</h2>
        <div className="row">
          {forecastData.map((forecast, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{forecast.date}</h5>
                  <p className="card-text">{forecast.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Weather;