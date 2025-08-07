import React, { useState, useEffect, useRef } from 'react'
import { FaUser, FaClock } from "react-icons/fa";
import info from '../10/info.jpg'
import './fauzan.css'

function Fauzan() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className={`fauzan-wrapper ${isVisible ? 'animate' : 'animate-on-scroll'}`} ref={sectionRef}>
      <div className={`containers ${isVisible ? 'animate' : 'animate-on-scroll'}`}>
        <img className="img-by-kishan"
          src={info}
          alt=""/>
        <br />
        <br />
        <p className='fau-bot'>FRONT END</p>
        <br />
        <p className='fau-bot'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          veniam!
        </p>
        <br />
        <div className="childContainer">
          <p className="det-fau">
            <FaUser style={{fill:"orange"}}/> Beginner
          </p>
          <p className="det-fau">
            <FaClock style={{color:"orange"}} /> 2h 24m
          </p>
        </div>
      </div>
      <div className={`containers ${isVisible ? 'animate' : 'animate-on-scroll'}`}>
        <img
          className="img-by-kishan"
          src={info}
          alt=""
        />
        <br />
        <br />
        <p className='fau-bot'>FRONT END</p>
        <br />
        <p className='fau-bot'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          veniam!
        </p>
        <br />
        <div className="childContainer">
          <p className="det-fau">
            <FaUser style={{fill:"orange"}} /> Beginner
          </p>
          <p className="det-fau">
            <FaClock style={{color:"orange"}} /> 2h 24m
          </p>
        </div>
      </div>
      <div className={`containers ${isVisible ? 'animate' : 'animate-on-scroll'}`}>
        <img
          className="img-by-kishan"
          src={info}
          alt=""
        />
        <br />
        <br />
        <p className='fau-bot'>FRONT END</p>
        <br />
        <p className='fau-bot'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          veniam!
        </p>
        <br />
        <div className="childContainer">
          <p className="det-fau">
            <FaUser style={{fill:"orange"}} /> Beginner
          </p>
          <p className="det-fau">
            <FaClock style={{color:"orange"}} /> 2h 24m
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fauzan