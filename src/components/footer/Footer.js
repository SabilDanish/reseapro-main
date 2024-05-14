import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';
import logof from "../../utils/images/MainLogo.png";
import { Link } from 'react-router-dom';
import wave from '../../utils/images/wave.svg'
import facebook from '../../utils/images/SocialIcons/facebook.png'
import linkedin from '../../utils/images/SocialIcons/linkedin.png'
import youtube from '../../utils/images/SocialIcons/youtube.png'
import twitter from '../../utils/images/SocialIcons/twitter.png'
import skype from '../../utils/images/SocialIcons/skype.png'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <img src={wave} />
      <div className='container-fluid FootCon'>
        <div className='row'>
          <div className='col-lg-3' >
            <div className='logo'>
              <img src={logof} alt="Main Logo" />
            </div>
            <div className='logo-Content'>
              <p>With more than 750+ editors and
                writers on our panel, we provide a
                healthy blend of inhouse as well as
                online expertise from top universities
                and research centers worldwide for
                services in scientific research
              </p>

              <p>Reseapro® is a company limited by shares, founded according to the Companies Act 1956 and incorporated in February 2009…..</p>

              <p>With a global reach and backed by an efficient digital delivery system, we are the trusted partners for thousands of researchers across domains.</p>
            </div>


          </div>

          <div className='col-lg-3' >
            <div class='Heading1'>
              <h5>What we do</h5>
              <div class="line"></div>
            </div>
            <div className='Links1'>
              <Link to="/" style={{ textDecoration: "none" }}>
                <p>
                  Research Data and Promotion
                </p>
              </Link>

              <Link to="/" style={{ textDecoration: "none" }}>
                <p>
                  Editing
                </p>
              </Link>

              <Link to="/" style={{ textDecoration: "none" }}>
                <p>
                  Writing
                </p>
              </Link>

              <Link to="/" style={{ textDecoration: "none" }}>
                <p>
                  Rewriting
                </p>
              </Link>

              <Link to="/" style={{ textDecoration: "none" }}>
                <p>
                  publishing
                </p>
              </Link>

              <Link to="/" style={{ textDecoration: "none" }}>
                <p>
                  Documenting, testing, and marketing
                  scientific innovations and devices
                </p>
              </Link>

              <Link to="/" style={{ textDecoration: "none" }}>
                <p>
                  Market surveys, analyses, and
                  consultancy services
                </p>
              </Link>

              <Link to="/" style={{ textDecoration: "none" }}>
                <p>
                  Translation and localization
                </p>
              </Link>

              <Link to="/" style={{ textDecoration: "none" }}>
                <p>
                  e-Learning
                </p>
              </Link>


            </div>

          </div>

          <div className='col-lg-2' >
            <div class='Heading1'>
              <h5>Quick Links</h5>
              <div class="line"></div>
            </div>
            <div className='Links1'>
              <ul>
                <li>
                  <Link to="/" style={{ textDecoration: "none" }}>
                  <strong><p>
                      Home
                    </p></strong>   
                    <hr></hr>
                  </Link>
                </li>

                <li>
                  <Link to="/" style={{ textDecoration: "none" }}>
                  <strong><p>
                      About Us
                    </p></strong>  
                    <hr></hr>
                  </Link>
                </li>

                <li>
                  <Link to="/" style={{ textDecoration: "none" }}>
                  <strong><p>
                      Service
                    </p></strong>  
                    <hr></hr>
                  </Link>
                </li>

                <li>
                  <Link to="/" style={{ textDecoration: "none" }}>
                  <strong><p>
                      Blogs
                    </p></strong>  
                    <hr></hr>
                  </Link>
                </li>

                <li>
                  <Link to="/" style={{ textDecoration: "none" }}>
                  <strong><p>
                      Contact us
                    </p></strong>  
                    <hr></hr>
                  </Link>
                </li>

                <li>
                  <Link to="/" style={{ textDecoration: "none" }}>
                  <strong><p>
                      Privacy Policy
                    </p></strong>  
                    <hr></hr>
                  </Link>
                </li>
              </ul>

            </div>
          </div>

          <div className='col-lg-4' >

            <div class='Heading1'>
              <h5>Office Locations</h5>
              <div class="line"></div>
            </div>

            <div className='Links1'>
              <Link to="/" style={{ textDecoration: "none" }}>
                <p>
                  <span class="world-icon">&#127758;</span>
                  OCAC Tower, Bhubaneswar 751013, INDIA
                </p>
              </Link>

              <Link to="/" style={{ textDecoration: "none" }}>
                <p>
                  <span class="world-icon">&#127758;</span>
                  Level 9 Raheja Towers, 26-27 Mahatma Gandhi Road, Bangalore-560 001, INDIA
                </p>
              </Link>

              <Link to="/" style={{ textDecoration: "none" }}>
                <p>
                  <span class="world-icon">&#127758;</span>
                  GMA, 8th Floor, ASTEM Bldg. KRP, 134 Chudoji Minamimachi, Shimogyo-ku, KYOTO - 6008813, JAPAN
                </p>
              </Link>

              <Link to="/" style={{ textDecoration: "none" }}>
                <p>
                  <span class="world-icon">&#127758;</span>
                  2530 Meridian Parkway, Suite 300, Durham, NC, 27713, USA
                </p>
              </Link>

              <Link to="/" style={{ textDecoration: "none" }}>
                <p>
                  <span class="world-icon">&#127758;</span>
                  26 Kings Hill Avenue, Kings Hill, West Malling, Maidstone, ME19 4AE, MAIDSTONE, UK
                </p>
              </Link>


            </div>

          </div>
        </div>
      </div>

      
        <div class="container-fluid FootConSocial" >
          <div class="row ">
            <div class="col-lg-6 SocialRow">
<p>Copyrights © 2021 Reseapro Scientific Services (P) Ltd.</p>
            </div>

            <div class="col-lg-6 socialIcon">
            <img src={facebook} />
            <img src={linkedin} />
            <img src={youtube} />
            <img src={twitter} />
            <img src={skype} />
            </div>
          </div>
        </div>
      

    </>
  )
}

export default Footer;





