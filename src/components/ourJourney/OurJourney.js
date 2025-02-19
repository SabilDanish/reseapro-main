import React from 'react'
import Slider from 'react-slick';
import './OurJourney.css'
import { MDBContainer } from "mdb-react-ui-kit";

const milestones = [
  { year: '2015', title: 'Company Founded', description: 'The company was established with a mission to innovate.' },
  { year: '2016', title: 'First Funding Round', description: 'Secured initial funding for product development.' },
  { year: '2017', title: 'First Product Launch', description: 'Launched the first successful product to market.' },
  { year: '2018', title: 'Team Expansion', description: 'Grew the team with top talent from the industry.' },
  { year: '2019', title: 'International Expansion', description: 'Expanded operations to international markets.' },
  { year: '2020', title: 'New Offices', description: 'Opened offices in key global cities.' },
  { year: '2021', title: 'Partnerships', description: 'Partnered with industry leaders to expand our services.' },
  { year: '2022', title: 'New Product Line', description: 'Introduced a new product line with innovative features.' },
  { year: '2023', title: 'Record Revenue', description: 'Achieved record-breaking revenue and customer growth.' }
];

const OurJourney = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className="roadmap-container">
        <MDBContainer className="py-5">
          <h2>Our Journey</h2>
          <ul className="timeline">
            <li className="timeline-item mb-5">
              <h5 className="fw-bold">Our company starts its operations</h5>
              <p className="text-muted mb-2 fw-bold">11 March 2020</p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                necessitatibus adipisci, ad alias, voluptate pariatur officia
                repellendus repellat inventore fugit perferendis totam dolor
                voluptas et corrupti distinctio maxime corporis optio?
              </p>
            </li>
            <li className="timeline-item mb-5">
              <h5 className="fw-bold">First customer</h5>
              <p className="text-muted mb-2 fw-bold">19 March 2020</p>
              <p className="text-muted">
                Quisque ornare dui nibh, sagittis egestas nisi luctus nec. Sed
                aliquet laoreet sapien, eget pulvinar lectus maximus vel. Phasellus
                suscipit porta mattis.
              </p>
            </li>
            <li className="timeline-item mb-5">
              <h5 className="fw-bold">Our team exceeds 10 people</h5>
              <p className="text-muted mb-2 fw-bold">24 June 2020</p>
              <p className="text-muted">
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Nulla ullamcorper arcu lacus, maximus
                facilisis erat pellentesque nec. Duis et dui maximus dui aliquam
                convallis. Quisque consectetur purus erat, et ullamcorper sapien
                tincidunt vitae.
              </p>
            </li>
            <li className="timeline-item mb-5">
              <h5 className="fw-bold">Earned the first million $!</h5>
              <p className="text-muted mb-2 fw-bold">15 October 2020</p>
              <p className="text-muted">
                Nulla ac tellus convallis, pulvinar nulla ac, fermentum diam. Sed et
                urna sit amet massa dapibus tristique non finibus ligula. Nam
                pharetra libero nibh, id feugiat tortor rhoncus vitae. Ut suscipit
                vulputate mattis.
              </p>
            </li>
          </ul>
        </MDBContainer>
      </div>
    </>
  )
}

export default OurJourney
