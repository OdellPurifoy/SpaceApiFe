import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import PlanetGrid from './components/planets/PlanetGrid';

import './App.css';
import axios from 'axios';


const App = () => {
  const [planets, setPlanets] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPlanets = async () => {
      const result = await axios(`http://localhost:4000/api/v1/planets`)

      // console.log(result.data)
      setPlanets(result.data)
      setIsLoading(false)
    }

    fetchPlanets()
  }, [])


  return ( <div className='container'>
            <Header />
            <PlanetGrid isLoading={isLoading} planets={planets} />
           </div>
         )
}

export default App;
