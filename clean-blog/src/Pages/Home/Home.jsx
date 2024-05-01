import React from 'react'

import "./Home.scss"
import HomeHero from '../../Components/Homesection/HomeHero'
import HomeMiddle from '../../Components/Homesection/HomeMiddle'

function Home() {
  return (
    <>
   <main>

    <HomeHero></HomeHero>
    <HomeMiddle></HomeMiddle>
   </main>
   
    </>
  )
}

export default Home