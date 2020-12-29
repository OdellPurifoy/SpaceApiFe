import React from 'react';

const PlanetGrid = ({ isLoading, planets }) => {
  return isLoading ? (<h1>Loading...</h1>) : (<section className="cards">
        {planets.map(planet => (
          <h1>{planet.name}</h1>
        ))}
    </section>)
}

export default PlanetGrid
