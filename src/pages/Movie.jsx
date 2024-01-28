import React from 'react'

import Genre from '../components/Homee/Genre';
import Popular from '../components/Homee/Popular';
import Trending from '../components/Homee/Trending';
import Releases from '../components/Homee/Releases';
import Watch from '../components/Homee/Watch';
import Genre2 from '../components/Shows/Genre2';
import Trending2 from '../components/Shows/Trending2';
import Releases2 from '../components/Shows/Releases2';
import Watch2 from '../components/Shows/Watch2';
import Trial from '../components/Trial'
import Headerh from '../containers/Headerh';




const Movie = () => {
  return (
  <>
  <div>
 
<Headerh/>
  
  <Genre/>
  <Popular/>
  <Trending/>
  <Releases/>
  <Watch/>
  </div>
  <div>
    <Genre2/>
    <Trending2/>
    <Releases2/>
    <Watch2/>
    <Trial/>
  </div>


  </>
  )
}

export default Movie