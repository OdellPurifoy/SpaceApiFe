import React from 'react';
import PlanetItem from './PlanetItem';
import Spinner from '../ui/Spinner';

const PlanetGrid = ({ isLoading, planets }) => {
  return isLoading ? (<Spinner />) : (<section className="cards">
        {planets.map(planet => (
          <div>
            <PlanetItem key={planet.id} planet={planet} />
          </div>
        ))}
    </section>)
}

export default PlanetGrid
