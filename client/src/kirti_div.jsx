import React from 'react'
import "./kirti.css"
import { ArrowRight } from "react-feather";
import Video from './assets/test.mp4'
import { Link } from 'react-router';
export default function Kirti_div() {
  return (
    <>
      <main id="main-body">
        <div className="hero-container">
          <div className="content" id="data">
            <ul id="sep">
              <li id="kuchh-bhi">ON-DEMAND COURSE</li>
            </ul>
            <strong>
              <p id="cour">
                Complete Python <br />
                Masterclass for <br />
                Web Development
              </p>
            </strong>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ad!</p>
            <div className="buttons">
              <button id="start" type="button">
                <Link to="/courses">Start Course</Link>
              </button>
              <button id="all" type="button">
                <Link to="/courses">View All Courses <ArrowRight size={12} /></Link>
              </button>
            </div>
          </div>

          <div className="content" id="vid">
            <video width="100%" controls>
              <source src={Video} type="video/mp4" />
            </video>
          </div>
        </div>
      </main>
    </>
  )
}
