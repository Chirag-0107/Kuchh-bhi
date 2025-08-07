import React from "react";
import "./aboutus.css";

export default function Aboutus() {
  return (
    <div className="aboutus">
      <h2 id="head-about">About us</h2>
      <p id="about-text">We're excited to have you at</p>
      <hr />

      <div className="vision-box">
        <div className="vision">
          <h3 id="head-vision">Our Vision</h3>
          <p id="vision-text">
            At Ainwik Infotech, we envision a future where individuals are empowered to thrive in the ever-evolving world of technology. Our vision is to be a leading institution that transforms aspiring learners into skilled IT professionals, equipped with the knowledge, expertise, and adaptability to shape the digital landscape.
          </p>
          <ul id="vision-list">
            <li id="vision-point-1">
              We strive to create an inclusive learning environment that fosters innovation, creativity, and critical thinking.
            </li>
            <li id="vision-point-2">
              Through our comprehensive training programs, we aim to bridge the gap between theoretical knowledge and practical application.
            </li>
            <li id="vision-point-3">
              In pursuit of excellence, we are committed to staying at the forefront of technological advancements.
            </li>
          </ul>
        </div>
        <div className="vision-image">
          <img
            id="vision-img"
            src="https://ainwikinfotech.in/gallery_resource/6137734.jpg"
            alt="vision"
          />
        </div>
      </div>
      <hr />

      <div className="approch-box">
        <div className="approch-image">
          <img
            id="approch-img"
            src="https://ainwikinfotech.in/gallery_resource/20943993.jpg"
            alt="approach"
          />
        </div>
        <div className="approch">
          <h3 id="head-approch">Our Approach</h3>
          <p id="approch-text">
            A comprehensive and practical learning experience designed to foster technical expertise, nurture innovation, and cultivate professional growth. We combine hands-on training, industry-relevant curriculum, and personalized guidance to empower learners to confidently navigate the ever-evolving landscape of information technology. Our approach integrates real-world projects, collaboration, and mentorship to ensure our students develop the skills, mindset, and adaptability needed to thrive in the IT industry.
          </p>
        </div>
      </div>
      <hr />

      <div className="process-box">
        <div className="process">
          <h3 id="head-process">Our Process</h3>
          <p id="process-text">
            At Ainwik Infotech, we are committed to providing a well-rounded and effective process that equips our learners with the knowledge, skills, and confidence to succeed in the dynamic field of information technology.
          </p>

          <details id="process-step-1">
            <summary id="step-summary-1">Needs Assessment</summary>
            <p id="step-desc-1">
              We conduct a thorough assessment to understand the specific learning needs and goals of each individual.
            </p>
          </details>

          <details id="process-step-2">
            <summary id="step-summary-2">Hands-on Practical Training</summary>
            <p id="step-desc-2">
              We believe in practical, real-world experience. Our programs emphasize hands-on learning via projects and simulations.
            </p>
          </details>

          <details id="process-step-3">
            <summary id="step-summary-3">Experienced and Qualified Instructors</summary>
            <p id="step-desc-3">
              Our instructors bring real industry experience to the classroom and offer high-quality guidance and mentorship.
            </p>
          </details>

          <details id="process-step-4">
            <summary id="step-summary-4">Industry Partnerships</summary>
            <p id="step-desc-4">
              Our partnerships keep us current with tech trends and open up networking and career opportunities for learners.
            </p>
          </details>
        </div>
        <div className="process-image">
          <img
            id="process-img"
            src="https://ainwikinfotech.in/gallery_resource/3569284.jpg"
            alt="process"
          />
        </div>
      </div>
      <hr />

      <div className="student-feedback">
        <h2 id="head-student">What do our students say about us?</h2>
        <div className="feedback-grid">
          <iframe
            id="feedback-video-1"
            src="https://www.youtube.com/embed/ePR74HW2Y2U?si=X2RwpBFcQvVvrLAe"
            title="Student Feedback 1"
            allowFullScreen
          ></iframe>
          <iframe
            id="feedback-video-2"
            src="https://youtube.com/embed/h7O9_o05F6Q?si=a91pQWPNAhnKqnOm"
            title="Student Feedback 2"
            allowFullScreen
          ></iframe>
          <iframe
            id="feedback-video-3"
            src="https://www.youtube.com/embed/SkN3IK014Js?feature=share"
            title="Student Feedback 3"
            allowFullScreen
          ></iframe>
          <iframe
            id="feedback-video-4"
            src="https://www.youtube.com/embed/G7UirR_p8MA?feature=share"
            title="Student Feedback 4"
            allowFullScreen
          ></iframe>
          <iframe
            id="feedback-video-5"
            src="https://www.youtube.com/embed/bIwGfa5D8aA?feature=share"
            title="Student Feedback 5"
            allowFullScreen
          ></iframe>
          <iframe
            id="feedback-video-6"
            src="https://www.youtube.com/embed/di4UpEXtJQA?feature=share"
            title="Student Feedback 6"
            allowFullScreen
          ></iframe>
          <iframe
            id="feedback-video-7"
            src="https://www.youtube.com/embed/2QoGnzsyBKk?feature=share"
            title="Student Feedback 7"
            allowFullScreen
          ></iframe>
          <iframe
            id="feedback-video-8"
            src="https://www.youtube.com/embed/u_kWscqIKwc?feature=share"
            title="Student Feedback 8"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}