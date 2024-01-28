import React from 'react'
import Headerh from '../containers/Headerh'
import Card2 from '../components/Card2'
import { Accordion } from '@material-tailwind/react'
import Plan from '../components/Plan'
import Trial from '../components/Trial'

import Watch2 from '../components/Shows/Watch2'
import { AccordionCustomIcon } from '../components/Accordion'
const Home = () => {
  return (
   <>
   <Headerh/>
  <Watch2/>
   <Card2/>
    <AccordionCustomIcon/>
   <Accordion/>
   <Plan/>
   <Trial/>
   </>
  )
}

export default Home