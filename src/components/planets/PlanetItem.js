import React from 'react';

const PlanetItem = ({ planet }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src='https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt ='' />
        </div>
        <div className="card-back">
          <h1>{planet.name}</h1>
          <ul>
            <li>
              <strong>Planet Type:</strong> {planet.planet_type}
            </li>
            <li>
              <strong>Surface Type:</strong> {planet.surface_type}
            </li>
            <li>
              <strong>Surface Temp:</strong> {planet.surface_temp}
            </li>
            <li>
              <strong>Core Type:</strong> {planet.core_type}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PlanetItem;
