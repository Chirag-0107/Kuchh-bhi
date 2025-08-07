import React, { useState, useEffect, useRef } from 'react';
import HT from './assets/html5.svg';
import HT_HOVER from './assets/icons8-html.svg';
import CS from './assets/css3.svg';
import CS_HOVER from './assets/icons8-css-48.png';
import JS from './assets/js.svg';
import JS_HOVER from './assets/icons8-js.svg';
import RE from './assets/react.svg';
import RE_HOVER from './assets/icons8-react-native.svg';
import PY from './assets/python.svg';
import PY_HOVER from './assets/icons8-python.svg';
import VU from './assets/vuejs.svg';
import VU_HOVER from './assets/icons8-vue-js.svg';
import AN from './assets/angular.svg';
import AN_HOVER from './assets/icons8-angular.svg';
import NJ from './assets/node-js.svg';
import NJ_HOVER from './assets/icons8-node-js.svg';
import Student from '../10/girl.png';
import './kishan.css';

export default function Kishan() {
  const [hovered, setHovered] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
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

  const icons = [
    { id: 1, normal: HT, hover: HT_HOVER },
    { id: 2, normal: CS, hover: CS_HOVER },
    { id: 3, normal: JS, hover: JS_HOVER },
    { id: 4, normal: RE, hover: RE_HOVER },
    { id: 5, normal: PY, hover: PY_HOVER },
    { id: 6, normal: VU, hover: VU_HOVER },
    { id: 7, normal: AN, hover: AN_HOVER },
    { id: 8, normal: NJ, hover: NJ_HOVER }
  ];

  return (
    <div ref={sectionRef}>
      <div className='imgdv'>
        <ul id='ul-kishan'>
          {icons.map(icon => (
            <li key={icon.id} className={`kishan-list ${isVisible ? 'animate' : 'animate-on-scroll'}`}>
              <div id="icon">
                <img
                  src={hovered === icon.id ? icon.hover : icon.normal}
                  alt=""
                  style={{ width: "40px", height: "40px" }}
                  onMouseEnter={() => setHovered(icon.id)}
                  onMouseLeave={() => setHovered(null)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div id='student'>
        <img src={Student} id="s1" className={isVisible ? 'animate' : 'animate-on-scroll'} alt="" />
        <div id='txt1' className={isVisible ? 'animate' : 'animate-on-scroll'}>
          <h1 id='heading' className={isVisible ? 'animate' : 'animate-on-scroll'}>WHAT OUR STUDENT'S SAY</h1>
          <h1 id='content' className={isVisible ? 'animate' : 'animate-on-scroll'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dicta sint molestias earum, iste nesciunt repellendus hic saepe omnis recusandae!</h1>
          <p id='by' className={isVisible ? 'animate' : 'animate-on-scroll'}>-By Lorem</p>
          <a href="#" id='read' className={isVisible ? 'animate' : 'animate-on-scroll'}>Read More</a>
        </div>
      </div>
    </div>
  );
}