import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import Navbar from './components/ui/Navbar';
import Search from './components/ui/Search';
import PlanetGrid from './components/planets/PlanetGrid';

import './App.css';
import axios from 'axios';


const App = () => {
  const [planets, setPlanets] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')


  useEffect(() => {
    const fetchPlanets = async () => {
      const result = await axios(`http://localhost:4000/api/v1/planets?planet_name=${query}`)

      // console.log(result.data)
      setPlanets(result.data)
      setIsLoading(false)
    }

    fetchPlanets()
  }, [query])


  return (
    <div>
      <Navbar />
      <div className='container'>
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <PlanetGrid isLoading={isLoading} planets={planets} />
      </div>
    </div>

  )
}

export default App;
