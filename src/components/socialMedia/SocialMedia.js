import React from 'react'
import facebook from '../../utils/images/SocialIcons/facebook.png'
import linkedin from '../../utils/images/SocialIcons/linkedin.png'
import youtube from '../../utils/images/SocialIcons/youtube.png'
import twitter from '../../utils/images/SocialIcons/twitter.png'
import skype from '../../utils/images/SocialIcons/skype.png'
import './SocialMedia.css'

const SocialMedia = ({ children }) => {
    return (
        <>
            <div className="Social-Media">
                <div className="col-lg-6 socialIcons">
                    <img src={facebook} />
                    <img src={linkedin} />
                    <img src={youtube} />
                    <img src={twitter} />
                    <img src={skype} />
                </div>
            </div>
            <div className='Main-Body'>
                {children}
            </div>
        </>
    )
}

export default SocialMedia
