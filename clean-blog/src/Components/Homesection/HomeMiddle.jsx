import React from 'react'
import "./HomeMiddle.scss"
import { Link } from 'react-router-dom'
function HomeMiddle() {
  return (
    <>
     <section className="middle">
        <div className="middle__div">
          <div className="middle__text">
            <Link className="middle__a"  to={'sample_post'}
              ><div>
                <h2 className="middle__h2">
                  Man must explore, and this is exploration at its greatest
                </h2>
                <h3>Problems look mighty small from 150 miles up</h3>
              </div></Link>
            <p>
              Posted by <Link className="middle__a" to={''}>Start Bootstrap</Link> on
              September 24, 2023
            </p>
          </div>
          <div className="middle__text">
            <Link className="middle__a" to={'sample_post'}><div>
                <h2 className="middle__h2">
                  I believe every human has a finite number of heartbeats. I
                  don't intend to waste any of mine.
                </h2>
              </div></Link>
            <p>
              Posted by <Link className="middle__a" to={''}>Start Bootstrap</Link> on
              September 18, 2023
            </p>
          </div>
          <div className="middle__text">
            <Link className="middle__a" to={'sample_post'}
              ><div className="middle__h2">
                <h2>Science has not yet mastered prophecy</h2>
                <h3 className="middle__h3">
                  We predict too much for the next year and yet far too little
                  for the next ten.
                </h3>
              </div></Link>
            <p>
              Posted by <Link className="middle__a" to={''}>Start Bootstrap</Link> on
              Augustus 24, 2023
            </p>
          </div>
          <div className="middle__text">
            <Link className="middle__a" to={'sample_post'}
              ><div>
                <h2 className="middle__h2">Failure is not an option</h2>
                <h3 className="middle__h3">
                  Many say exploration is part of our destiny, but it’s actually
                  our duty to future generations.
                </h3>
              </div></Link>
            <p>
              Posted by <Link className="middle__a" to={''}>Start Bootstrap</Link> on July
              8, 2023
            </p>
          </div>
          <div className="middle__button__div">
            <button className="middle__button">
              OLDER POSTS <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
       
      </section>
    </>
  )
}

export default HomeMiddle