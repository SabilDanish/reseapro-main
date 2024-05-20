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
                    <img src={facebook} alt='facebook'/>
                    <img src={linkedin} alt='linkedin'/>
                    <img src={youtube} alt='youtube'/>
                    <img src={twitter} alt='twitter'/>
                    <img src={skype} alt='skype'/>
                </div>
            </div>
            <div className='Main-Body'>
                {children}
            </div>
        </>
    )
}

export default SocialMedia
