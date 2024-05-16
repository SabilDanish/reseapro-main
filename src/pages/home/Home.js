import { Container, Row, Col, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import topBanner from "../../utils/images/BannerReseaproHome.jpg";
import './Home.css';
import topban from "../../utils/images/Banner-f.png";
import about from "../../utils/images/Aboutus.png";
import Card1 from "../../utils/images/WhyChooseUs/reseapro-icons1.png";
import Card2 from "../../utils/images/WhyChooseUs/reseapro-icons2.png";
import Card3 from "../../utils/images/WhyChooseUs/reseapro-icons3.png";
import testi1 from "../../utils/images/testimonial/testi1.jpg";
import testi2 from "../../utils/images/testimonial/testi2.jpg";
import testi3 from "../../utils/images/testimonial/testi3.jpg";
import testi4 from "../../utils/images/testimonial/testi4.jpg";
import lat1 from "../../utils/images/Latest News/lat1.png";
import lat2 from "../../utils/images/Latest News/lat2.png";
import lat3 from "../../utils/images/Latest News/lat3.png";
import partner1 from "../../utils/images/Partner/chemistry-education.png";
import partner2 from "../../utils/images/Partner/globaldiabetes.png";
import partner3 from "../../utils/images/Partner/natural-products.png";
import partner4 from "../../utils/images/Partner/partner1.png";
import partner5 from "../../utils/images/Partner/pharmacognosy-2018.png";
import Card from 'react-bootstrap/Card';
import Slider from 'react-slick';
import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SlotCounter from 'react-slot-counter';



const Home = () => {


  const isDesktop = useMediaQuery({ minWidth: 992 });

  return (
    // ..........................................................................................................................top banner section 
    <div className="allHome">
      <div className="topBanner">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="content">
                <h2 className='ContentHead'>Welcome to the home of academic and corporate services...</h2>
                <p className='Content-Para'>Reseapro® Scientific Services (P) Limited is a leading research service-based
                  company providing customized and on-demand scientific solutions and expertise
                  worldwide.</p>
                <Button variant="primary" className="custom-button">KNOW MORE</Button>
              </div>
            </Col>
            <Col md={6}>
              <div className="image">
                <img src={topban} alt="Top Banner" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* .................................................................................................................About us section start here */}

      <div className="aboutus">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="content">
                <h2 className='ContentHead'>About Us</h2>
                <p className='Content-Para'>Reseapro® Scientific Services (P) Limited is a leading research service-based
                  company providing customized and on-demand scientific solutions and expertise
                  worldwide. </p><p>Reseapro® is a company limited by shares, founded according to the Companies Act 1956 and incorporated in February 2009…..</p>
                <Button variant="primary" className="custom-button">KNOW MORE</Button>
              </div>
            </Col>
            <Col md={6}>
              <div className="image">
                <img src={about} alt="Top Banner" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ..........................................................................................................Why Choose Us Section starts here */}
      <div className='Choose-Card-Main'>
        <Container>
          <h2 className='ContentHead ContentHeadWhyChooseUs'>Why Choose Us</h2>
          <div className="dividerzz"></div>
          <Row>
            <Col md={4}>
              <Card className='Choose-Cards' style={{ width: '100%' }}>
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
            </Col>
            <Col md={4}>
              <Card className='Choose-Cards' style={{ width: '100%' }}>
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
            </Col>
            <Col md={4}>
              <Card className='Choose-Cards' style={{ width: '100%' }}>
                <Card.Img variant="top" style={{ width: '8rem' }} src={Card3} />
                <Card.Body>
                  <Card.Title>Technology and Knowledge Transfer</Card.Title>
                  <Card.Text>
                    Find answers to questions about products,
                    setup, and administration.
                  </Card.Text>
                </Card.Body>
                <Button variant="primary">KNOW MORE</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>


      {/* ........................................................................................................................Testimonial Section */}
      <Container className="my-5">
        <h2 className='ContentHead ContentHeadWhyChooseUs'>Testimonial</h2>
        <div className="dividerzz"></div>
        {isDesktop ? (
          <Carousel controls={false}>
            <Carousel.Item>
              <div className="d-flex justify-content-around">
                <Card className='Choose-Cardstesti testimonialWidth mx-2'>
                  <Card.Body>
                    <p className="card-text">"I am writing this letter as a humble note of appreciation for the outstanding service of Manuscriptedit.com. The ability to provide the resolution quickly exceeded my expectations. I want to take the time to acknowledge your contribution to my recent works."</p>
                    <div className="d-flex justify-content-start">
                      <Card.Img
                        variant="top"
                        src={testi4}
                        className="rounded-circle mr-3"
                        style={{ width: '4rem', height: '4rem', borderRadius: '50%', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' }}
                      />
                                    <div style={{ paddingLeft: '1rem' }}>
                        <Card.Title>Salma Aldallal</Card.Title>
                        <Card.Text></Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <Card className='Choose-Cardstesti testimonialWidth mx-2'>
                  <Card.Body>
                    <p className="card-text">"We are very thankful to you for your help in improving our manuscript! Without your help, we could not have published our reviews. We will continue to work and use your help. Please accept sincere gratitude from all the authors of the manuscript."</p>
                    <div className="d-flex justify-content-start">
                      <Card.Img
                        variant="top"
                        src={testi1}
                        className="rounded-circle mr-3"
                        style={{ width: '4rem', height: '4rem', borderRadius: '50%', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' }}
                      />
                                    <div style={{ paddingLeft: '1rem' }}>
                        <Card.Title>Dr. Tatiana Yu. GAGKAEVA</Card.Title>
                        <Card.Text>All-Russian Institute of Plant Protection (VIZR), RUSSIA.</Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-around">
                <Card className='Choose-Cardstesti testimonialWidth mx-2'>
                  <Card.Body>
                    <p className="card-text">"At the beginning of my research works I faced a lot of obstacles including finding a correct journal to publish my researches in, English language edition and proofreading, response to reviewers, etc. Manuscriptedit had solved these problems for me..."</p>
                    <div className="d-flex justify-content-start">
                      <Card.Img
                        variant="top"
                        src={testi2}
                        className="rounded-circle mr-3"
                        style={{ width: '4rem', height: '4rem', borderRadius: '50%', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' }}
                      />
                                    <div style={{ paddingLeft: '1rem' }}>   
                        <Card.Title>Seerwan O. Hasan</Card.Title>
                        <Card.Text>M.B.Ch.B (University of Sulaimani/School of Medicine)</Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <Card className='Choose-Cardstesti testimonialWidth mx-2'>
                  <Card.Body>
                    <p className="card-text">"Thank you very much Manuscriptedit for the type of writing which is apical, really it is a good job that exceeds my expectations. The most important thing is that I am thankful to the people who work in this association for the good work and the good writing and especially the revisions made with the relevant comments."</p>
                    <div className="d-flex justify-content-start">
                      <Card.Img
                        variant="top"
                        src={testi3}
                        className="rounded-circle mr-3"
                        style={{ width: '4rem', height: '4rem', borderRadius: '50%', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' }}
                      />
                                    <div style={{ paddingLeft: '1rem' }}>
                        <Card.Title>Dr. Laref Nora</Card.Title>
                        <Card.Text></Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>
        ) : (
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <Card className='Choose-Cardstesti testimonialWidth'>
                <Card.Body>
                  <p className="card-text">"I am writing this letter as a humble note of appreciation for the outstanding service of Manuscriptedit.com. The ability to provide the resolution quickly exceeded my expectations. I want to take the time to acknowledge your contribution to my recent works."</p>
                  <div className="d-flex justify-content-start">
                    <Card.Img
                      variant="top"
                      src={testi4}
                      className="rounded-circle mr-3"
                      style={{ width: '4rem', height: '4rem', borderRadius: '50%', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                    <div>
                      <Card.Title>Salma Aldallal</Card.Title>
                      <Card.Text></Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card className='Choose-Cardstesti testimonialWidth'>
                <Card.Body>
                  <p className="card-text">"We are very thankful to you for your help in improving our manuscript! Without your help, we could not have published our reviews. We will continue to work and use your help. Please accept sincere gratitude from all the authors of the manuscript."</p>
                  <div className="d-flex justify-content-start">
                    <Card.Img
                      variant="top"
                      src={testi1}
                      className="rounded-circle mr-3"
                      style={{ width: '4rem', height: '4rem', borderRadius: '50%', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                    <div>
                      <Card.Title>Dr. Tatiana Yu. GAGKAEVA</Card.Title>
                      <Card.Text>All-Russian Institute of Plant Protection (VIZR), RUSSIA.</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card className='Choose-Cardstesti testimonialWidth'>
                <Card.Body>
                  <p className="card-text">"At the beginning of my research works I faced a lot of obstacles including finding a correct journal to publish my researches in, English language edition and proofreading, response to reviewers, etc. Manuscriptedit had solved these problems for me..."</p>
                  <div className="d-flex justify-content-start">
                    <Card.Img
                      variant="top"
                      src={testi2}
                      className="rounded-circle mr-3"
                      style={{ width: '4rem', height: '4rem', borderRadius: '50%', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                    <div>
                      <Card.Title>Seerwan O. Hasan</Card.Title>
                      <Card.Text>M.B.Ch.B (University of Sulaimani/School of Medicine)</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card className='Choose-Cardstesti testimonialWidth'>
                <Card.Body>
                  <p className="card-text">"Thank you very much Manuscriptedit for the type of writing which is apical, really it is a good job that exceeds my expectations. The most important thing is that I am thankful to the people who work in this association for the good work and the good writing and especially the revisions made with the relevant comments."</p>
                  <div className="d-flex justify-content-start">
                    <Card.Img
                      variant="top"
                      src={testi3}
                      className="rounded-circle mr-3"
                      style={{ width: '4rem', height: '4rem', borderRadius: '50%', boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                    <div>
                      <Card.Title>Dr. Laref Nora</Card.Title>
                      <Card.Text></Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        )}
      </Container>

      {/* ......................................................................................................Latest News section here */}
      <div className='Choose-Card-Main'>
        <Container>
          <h2 className='ContentHead ContentHeadWhyChooseUs'>Latest News</h2>
          <div className="dividerzz"></div>
          <Row>
            <Col md={4}>
              <Card className='Choose-Cardslat' style={{ width: '100%' }}>
                <Card.Img variant="top" src={lat1} />
                <Card.Body>
                  <Card.Text>19 Mar, 2024</Card.Text>
                  <Card.Title>How to Publish Research Papers in Highly Indexed Journals?</Card.Title>
                  <Card.Text>Continue</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className='Choose-Cardslat' style={{ width: '100%' }}>
                <Card.Img variant="top" src={lat2} />
                <Card.Body>
                  <Card.Text>18 Mar, 2024</Card.Text>
                  <Card.Title>Importance Of Quality Content In SCOPUS</Card.Title>
                  <Card.Text>Continue</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className='Choose-Cardslat' style={{ width: '100%' }}>
                <Card.Img variant="top" src={lat3} />
                <Card.Body>
                  <Card.Text>13 Mar, 2024</Card.Text>
                  <Card.Title>What Are The Most Popular Reasons Editors Usually Reject Your Paper For?</Card.Title>
                  <Card.Text>Continue</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* ......................................................................................................Our Partners */}

      <Container className="my-5">
        <h2 className='ContentHead ContentHeadWhyChooseUs'>Our Partners</h2>
        <div className="dividerzz"></div>
        {isDesktop ? (
          <Carousel controls={false}>
            <Carousel.Item>
              <div className="d-flex justify-content-around">
              <img src={partner1} alt="Partner" className="img-fluid" />
              <img src={partner2} alt="Partner" className="img-fluid" />
              <img src={partner3} alt="Partner" className="img-fluid" />
              <img src={partner4} alt="Partner" className="img-fluid" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-around">
              <img src={partner3} alt="Partner" className="img-fluid" />
              <img src={partner4} alt="Partner" className="img-fluid" />
              <img src={partner1} alt="Partner" className="img-fluid" />
              <img src={partner5} alt="Partner" className="img-fluid" />
              </div>
            </Carousel.Item>
          </Carousel>
        ) : (
          <Carousel controls={false} indicators={false}>
            <Carousel.Item>
              <div className="d-flex justify-content-around">
              <img src={partner1} alt="Partner" className="img-fluid" />
              <img src={partner2} alt="Partner" className="img-fluid" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-around">
              <img src={partner3} alt="Partner" className="img-fluid" />
              <img src={partner4} alt="Partner" className="img-fluid" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-around">
              <img src={partner3} alt="Partner" className="img-fluid" />
              <img src={partner5} alt="Partner" className="img-fluid" />
              </div>
            </Carousel.Item>
          </Carousel>
          
        )}
      </Container>

      
    </div>
  );
}

export default Home