import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';
import logof from "../../utils/images/MainLogo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <Container fluid>
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div className="col mb-3">
            <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <div className="imagef"><img src={logof} /></div>
            </a>
            <p className="text-body-secondary text-white mt-5">With more than 750+ editors and writers on our panel, we provide a healthy blend of inhouse as well as online expertise from top universities and research centers worldwide for services in scientific research manuscript editing, academic research paper editing, medical research paper editing, thesis editing, proofreading, manuscript formatting, medical writing, academic writing, business communication, and publication support services</p>
          </div>

          <div className="col mb-3">

          </div>

          <div className="col mb-3">
            <h3>What We Do</h3>
            <div className="divider"></div>
            <ul className="nav flex-column">
              <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-white">Research Data and Promotion</a></li>
              <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-white">Editing</a></li>
              <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-white">Writing</a></li>
              <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-white">Rewriting</a></li>
              <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-white">Publishing</a></li>
              <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-white">Documenting, testing, and marketing scientific innovations and devices</a></li>
              <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-white">Market surveys, analyses, and consultancy services</a></li>
              <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-white">Translation and localization</a></li>
              <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-white">e-Learning</a></li>
            </ul>
          </div>

          <div className="col mb-3 ftext2">
            <h3>Latest News</h3>
            <div className="divider"></div>
            <ul className="nav flex-column">
              <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-white">How to Publish Research Papers in Highly Indexed Journals? September 02, 2021</a></li>
              <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-white">Importance Of Quality Content In SCOPUS August 26, 2021</a></li>
              <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-white">What Are The Most Popular Reasons Editors Usually Reject Your Paper For? July 23, 2021</a></li>
            </ul>
          </div>

          <div className="col mb-3">
            <h3>Office Locations</h3>
            <div className="divider"></div>
            <ul className="nav flex-column">
              <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-white">OCAC Tower, Bhubaneswar 751013, INDIA</a></li>
              <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-white">Level 9 Raheja Towers, 26-27 Mahatma Gandhi Road, Bangalore-560 001, INDIA</a></li>
              <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-white">GMA, 8th Floor, ASTEM Bldg. KRP, 134 Chudoji Minamimachi, Shimogyo-ku, KYOTO - 6008813, JAPAN</a></li>
              <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-white">2530 Meridian Parkway, Suite 300, Durham, NC, 27713, USA</a></li>
              <li className="nav-item mb-4"><a href="#" className="nav-link p-0 text-white">26 Kings Hill Avenue, Kings Hill, West Malling, Maidstone, ME19 4AE, MAIDSTONE, UK</a></li>
            </ul>
          </div>
        </footer>
      </Container>
    </div>
  )
}

export default Footer;
