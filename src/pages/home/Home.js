import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import topBanner from "../../utils/images/BannerReseaproHome.jpg";
import './Home.css';
import topban from "../../utils/images/Banner.png";
import about from "../../utils/images/Aboutus.png";
import Card1 from "../../utils/images/reseapro-icons1.png";
import Card2 from "../../utils/images/reseapro-icons2.png";
import Card3 from "../../utils/images/reseapro-icons3.png";
import Card from 'react-bootstrap/Card';

const Home = () => {

  return (
    <>
      {/* Top Banner Starts here */}
      <div className="topBanner">
        <div className="content">
          <h1 className='ContentHead'>Welcome to the home of academic and corporate services...</h1>
          <p className='Content-Para'>Reseapro® Scientific Services (P) Limited is a leading research service-based
            company providing customized and on-demand scientific solutions and expertise
            worldwide.</p>
          <button className="custom-button">KNOW MORE</button>
        </div>
        <div className="image"><img src={topban} /></div>
      </div>
      {/* About us section start here */}
      <div className="aboutus">
        <div className="content">
          <h1 className='ContentHead ContentHeadAboutUs'>About Us</h1>
          <div className='Home-Underline'></div>
          <p className='Content-Para'>The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.</p>
          <p className='Content-Para'>Reseapro® is a company limited by shares, founded according to the Companies Act
            1956 and incorporated in February 2009…..</p>
          <button className="custom-button">KNOW MORE</button>
        </div>
        <div className="image"><img src={about} /></div>
      </div>
      {/* Why Choose Us Section starts here */}

      <div className='Choose-Card-Main'>
          <h1 className='ContentHead ContentHeadWhyChooseUs'>Why Choose Us</h1>
          <div className='Choose-Card'>
            {/* Card 1 here */}
            <Card className='Choose-Cards' style={{ width: '25rem' }}>
              <Card.Img variant="top" style={{ width: '8rem' }} src={Card1} />
              <Card.Body>
                <Card.Title>Time Tested Expertise</Card.Title>
                <Card.Text>
                  Read more about our mission, our products and
                  communities we serve.
                </Card.Text>
              </Card.Body>
              <Button variant="primary">KNOW MORE</Button>
            </Card>
            {/* Card 2 here */}
            <Card className='Choose-Cards' style={{ width: '25rem' }}>
              <Card.Img variant="top" style={{ width: '8rem' }} src={Card2} />
              <Card.Body>
                <Card.Title>Strong Market Analytics</Card.Title>
                <Card.Text>
                  See all ProQuest products and services and
                  other resources.
                </Card.Text>
              </Card.Body>
              <Button variant="primary">KNOW MORE</Button>
            </Card>
            {/* Card 3 here */}
            <Card className='Choose-Cards' style={{ width: '25rem' }}>
              <Card.Img variant="top" style={{ width: '8rem' }} src={Card3} />
              <Card.Body>
                <Card.Title>Technology and knowledge Transfer</Card.Title>
                <Card.Text>
                  Find answers to questions about products,
                  setup, and administration.
                </Card.Text>
              </Card.Body>
              <Button variant="primary">KNOW MORE</Button>
            </Card>
          </div>
      </div>
    </>

  )
}

export default Home
