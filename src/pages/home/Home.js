import { Button, Container } from 'react-bootstrap';
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

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerButtons from '../../components/buttons/BannerButtons';
import Loader from '../../components/loader/Loader';
import Whatwedo from '../../components/whatWeDo/Whatwedo';



const Home = ({loading}) => {
  if(loading){
    return (
      <div className='Loader'>
        <Loader />
      </div>
    )
  }
  return (
    <div className="allHome">



      {/* Top Banner Starts here */}
      <div className="topBanner">
        <div className="content">
          <h2 className='ContentHead'>Welcome to the home of academic and corporate services...</h2>
          <p className='Content-Para'>Reseapro® Scientific Services (P) Limited is a leading research service-based
            company providing customized and on-demand scientific solutions and expertise
            worldwide.</p>
          {/* <button className="custom-button">KNOW MORE</button> */}
          <BannerButtons title={"KNOW MORE"} />
        </div>
        {/* <div className="image"><img src={topban} /></div> */}
      </div>




      {/* About us section start here */}

      <div className="aboutus">
        <div className="content">
          <h2 className='ContentHead ContentHeadAboutUs'>About Us</h2>
          <div className="dividerzz"></div>

          <p className='Content-Para'>The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.</p>
          <p className='Content-Para'>Reseapro® is a company limited by shares, founded according to the Companies Act
            1956 and incorporated in February 2009…..</p>
          <BannerButtons title={"KNOW MORE"} />
        </div>
        {/* <div className="image"><img src={about} /></div> */}
      </div>


      {/* Why Choose Us Section starts here */}

      <div className='Choose-Card-Main'>
        <h2 className='ContentHead ContentHeadWhyChooseUs'>Why Choose Us</h2>
        <div className="dividerzz"></div>
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
            <BannerButtons title={"KNOW MORE"} />
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
            <BannerButtons title={"KNOW MORE"} />
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
            <BannerButtons title={"KNOW MORE"} />
          </Card>
        </div>
      </div>


      {/* what we do  */}
      <Whatwedo/>



      {/* Testimonial Section Starts here */}
      <div className='Choose-Card-Main backColor'>
        <h2 className='ContentHead ContentHeadWhyChooseUs'>Testimonial</h2>
        <div className="dividerzz"></div>
        <div className='Choose-Card'>
          {/* Card 1 here */}

          <Swiper
            spaceBetween={10}
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={2}
            modules={[Autoplay, Pagination, Navigation]}
            className="testimonialSwiper"
          // navigation={true}
          >
            <SwiperSlide>
              <Card className='Choose-Cardstesti testimonialWidth'>
                <testim>" I am writing this letter as a humble note of appreciation for the outstanding service of Manuscriptedit.com. The ability to provide the resolution quickly exceeded my expectations. I want to take the time to acknowledge your contribution to my recent works."</testim>
                <Card.Body className="d-flex justify-content-start">
                  <div style={{ marginRight: '1rem', marginLeft: 'auto' }}>
                    <Card.Img
                      variant="top"
                      style={{
                        width: '4rem',
                        marginRight: '1rem',
                        borderRadius: '50%',
                        boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' // Adding box shadow
                      }}
                      src={testi4}
                    />
                  </div>
                  <testim2>
                    <Card.Title>Salma Aldallal</Card.Title>
                    <Card.Text> </Card.Text>
                  </testim2>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className='Choose-Cardstesti testimonialWidth'>
                <testim>" We are very thankful to you for your help in improving our manuscript! Without your help, we could not have published our reviews. We will continue to work and use your help. Please accept sincere gratitude from all the authors of the manuscript."

                </testim>
                <Card.Body className="d-flex justify-content-start">
                  <div style={{ marginRight: '1rem', marginLeft: 'auto' }}>
                    <Card.Img
                      variant="top"
                      style={{
                        width: '4rem',
                        marginRight: '1rem',
                        borderRadius: '50%',
                        boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' // Adding box shadow
                      }}
                      src={testi1}
                    />
                  </div>
                  <testim2>
                    <Card.Title>Dr. Tatiana Yu. GAGKAEVA</Card.Title>
                    <Card.Text>All-Russian Institute of Plant Protection (VIZR), RUSSIA.</Card.Text>
                  </testim2>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className='Choose-Cardstesti testimonialWidth'>
                <testim>" At the beginning of my research works I faced a lot of obstacles including finding a correct journal to publish my researches in, English language edition and proofreading, response to reviewers, etc. Manuscriptedit had solved these problems for me... "</testim>
                <Card.Body className="d-flex justify-content-start">
                  <div style={{ marginRight: '1rem', marginLeft: 'auto' }}>
                    <Card.Img
                      variant="top"
                      style={{
                        width: '4rem',
                        marginRight: '1rem',
                        borderRadius: '50%',
                        boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' // Adding box shadow
                      }}
                      src={testi2}
                    />
                  </div>
                  <testim2>
                    <Card.Title>Seerwan O. Hasan</Card.Title>
                    <Card.Text>M.B.Ch.B (University of Sulaimani/School of Medicine)</Card.Text>
                  </testim2>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className='Choose-Cardstesti testimonialWidth'>
                <testim>"Thank you very much Manuscriptedit for the type of writing which is apical, really it is a good job that exceeds my expectations. The most important thing is that | am thankful to the people who work in this association for the good work and the good writing and especially the revisions made with the relevant comments."</testim>
                <Card.Body className="d-flex justify-content-start">
                  <div style={{ marginRight: '1rem', marginLeft: 'auto' }}>
                    <Card.Img
                      variant="top"
                      style={{
                        width: '4rem',
                        marginRight: '1rem',
                        borderRadius: '50%',
                        boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' // Adding box shadow
                      }}
                      src={testi3}
                    />
                  </div>
                  <testim2>
                    <Card.Title>Dr. Laref Nora</Card.Title>
                    <Card.Text> </Card.Text>
                  </testim2>
                </Card.Body>
              </Card>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>



      {/* Latest News section here */}

      <div className='Choose-Card-Main'>
        <h2 className='ContentHead ContentHeadWhyChooseUs'>Latest News</h2>
        <div className="dividerzz"></div>
        <div className='Choose-Card'>
          {/* Card 1 here */}
          <Card className='Choose-Cardslat' style={{ width: '25rem' }}>
            <Card.Img variant="top" src={lat1} />
            <Card.Body>
              <Card.Text>19 Mar, 2024</Card.Text>
              <Card.Title>How to Publish Research Papers in Highly Indexed Journals?</Card.Title>
              <Card.Text>Continue</Card.Text>
            </Card.Body>
          </Card>
          {/* Card 2 here */}
          <Card className='Choose-Cardslat' style={{ width: '25rem' }}>
            <Card.Img variant="top" src={lat2} />
            <Card.Body>
              <Card.Text>18 Mar, 2024</Card.Text>
              <Card.Title>Importance Of Quality Content In SCOPUS</Card.Title>
              <Card.Text>Continue</Card.Text>
            </Card.Body>
          </Card>
          {/* Card 3 here */}
          <Card className='Choose-Cardslat' style={{ width: '25rem' }}>
            <Card.Img variant="top" src={lat3} />
            <Card.Body>
              <Card.Text>13 Mar, 2024</Card.Text>
              <Card.Title>What Are The Most Popular Reasons Editors Usually Reject Your Paper For?</Card.Title>
              <Card.Text>Continue</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>



      {/* This is the starting of Our Partners Section */}
      <div className='partnergap'>
        <h2 className='ContentHead'>Our Partners</h2>
        <div className="dividerzz"></div>
        <Swiper
          spaceBetween={10}
          // centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src={partner1} className="img-fluid" /></SwiperSlide>
          <SwiperSlide><img src={partner2} className="img-fluid" /></SwiperSlide>
          <SwiperSlide><img src={partner3} className="img-fluid" /></SwiperSlide>
          <SwiperSlide><img src={partner4} className="img-fluid" /></SwiperSlide>
          <SwiperSlide><img src={partner5} className="img-fluid" /></SwiperSlide>
          <SwiperSlide><img src={partner1} className="img-fluid" /></SwiperSlide>
        </Swiper>
      </div>
    </div>

  )
}

export default Home
