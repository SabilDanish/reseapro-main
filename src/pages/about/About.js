import React from 'react'
import aboutusHero from '../../utils/images/about_us.jpg'
import BreadCrumbs from '../../components/breadcrumbs/BreadCrumbs'
import OurJourney from '../../components/ourJourney/OurJourney'

const paths = [
  { label: 'Home', link: '/' },
  { label: 'Category', link: 'category' },
  { label: 'Sub-category', link: 'category/sub-category' },
  { label: 'Current Page', link: '' },
];

const About = () => {
  return (
    <>
      {/*Hero Section*/}
      <>
        <div className='aboutus-hero-image'>
          <img src={aboutusHero} />
        </div>
        {/*Breadcrumb Section*/}
        <div className='aboutus-breadcrumbs'>
          <BreadCrumbs paths={paths} />
        </div>
        {/*Our Journey Section*/}
        <div>
          <OurJourney />
        </div>
        {/*Meet our leaders*/}
        <div>
          
        </div>
      </>
    </>
  )
}

export default About
