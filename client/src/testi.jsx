import React, { useState, useEffect, useRef } from 'react';
import feedback from "./assets/feedback.jpg"
import './testi.css';
import { Link } from 'react-router'; // Updated to react-router-dom

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Adjusted threshold for better triggering
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
    <div id = "test-cont"ref={sectionRef}>
      <h1 id="th1" className={isVisible ? 'animate' : 'animate-on-scroll'}>
        TESTIMONIALS
      </h1>
      <p id="pre1" className={isVisible ? 'animate' : 'animate-on-scroll'}>
        Trusted by Thousand of <br /> Students and Tutors
      </p>
      <button
        id="btn-inder"
        type="button"
        className={isVisible ? 'animate' : 'animate-on-scroll'}
      >
        <Link to="/login">Start Learning</Link>
      </button>
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={`testimonials-list ${isVisible ? 'animate' : 'animate-on-scroll'}`}
        >
          <img
            src={feedback}
            alt="Testimonial"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem ex
            reiciendis sapiente voluptate nam voluptatum, dolorem omnis a.
          </p>
        </div>
      ))}
      <footer id="foot-b" className='text-center'>
        <p>© Copyright {currentYear} Ainwik Infotech All Rights Reserved</p>
        <p>Designed by Chirag,Kishan,Fauzan,Kirti,Inderpreet</p>
      </footer>
    </div>
  );
}