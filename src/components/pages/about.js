import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function () {
  return (
    <div className='about'>
      <h2 className='title'>Our Mission: Connecting Clients and Quality Inspectors Directly and
        Efficiently</h2>

      <h4 className='mission'>At SiteWork, our mission is to provide an innovative solution
        to two pivotal groups: clients seeking highly skilled quality inspectors
        and inspectors looking for exciting projects as freelancers.</h4>

      <div className='vision'>
        <h2 className='vision-title'>Our Vision: Simplify and Enhance the Hiring of Quality Inspectors</h2>
        <h4>We understand the challenges that businesses and professionals face when
          seeking reliable quality inspection services. Traditional hiring processes
          can be cumbersome and costly due to unnecessary intermediaries.
          At SiteWork, we've decided to address these issues head-on.</h4>
      </div>

      <div className='solve'>
        <h2 className='solve-title'>Solving Common Problems</h2>
        <h4>Eliminating Abusive Intermediaries: On our platform, we remove the costly middlemen
          who often inflate service prices. This means both clients and inspectors get a fairer
          and more cost-effective deal.</h4>
        <h4>Direct Communication: We facilitate direct communication between clients and
          inspectors. This ensures that client needs are fully understood and that inspectors
          have a clear understanding of expectations.</h4>
        <h4>Increased Efficiency: With SiteWork, we streamline the entire hiring process.
          No longer will you have to deal with bureaucratic red tape and unnecessary delays.
          Efficiency is the key.</h4>
      </div>

      <div className='comunity'>
        <h2 className='comunity-title'>The added value: Our Community of Inspectors</h2>
        <h4>SiteWork is the meeting place for talented quality inspectors. If you're an inspector seeking
          new challenging projects, you've come to the right place. We offer a platform where
          you can showcase your skills and experience to a wide range of clients.</h4>
      </div>

      <div className='join'>
        <h2 className='join-title'>Join SiteWork today</h2>
        <h4>We are committed to making the hiring of quality inspectors more accessible
          and effective for all. SiteWork is the solution you've been waiting
          for. Join our growing community of clients and inspectors and experience a more
          direct, cost-effective, and efficient hiring process.</h4>
        <h4> SiteWork: Connecting quality with efficiency.</h4>
      </div>

      <button className='join-btn'>
        <Link to="../auth">Join Us Now</Link>
      </button>
    </div>
  );
}