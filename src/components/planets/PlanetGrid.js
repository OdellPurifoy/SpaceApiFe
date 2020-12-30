import React from 'react';
import PlanetItem from './PlanetItem'

const PlanetGrid = ({ isLoading, planets }) => {
  return isLoading ? (<h1>Loading...</h1>) : (<section className="cards">
        {planets.map(planet => (
          <div>
            <PlanetItem key={planet.id} planet={planet} />
          </div>
        ))}
    </section>)
}

export default PlanetGrid
