import React from 'react'
import "./Sample_postHero.scss"
import { Link } from 'react-router-dom'
function Sample_postHero() {
  return (
    <>
     <section className="hero_SamplePost">
        <div className="hero_SamplePost_div">
          <h1 className="hero__h1">
            Man must explore, and this is exploration at its greatest
          </h1>
          <h2 className="hero__h2">Problems look mighty small from 150 miles up</h2>
          <p className="hero__p">
            Posted by <Link className="hero__a" to={""}>Start Bootstrap</Link> on August
            24, 2023
          </p>
        </div>
      </section>
    </>
  )
}

export default Sample_postHero