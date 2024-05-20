import './Whatwedo.css'
import { faBook, faBookJournalWhills, faBuildingColumns, faChalkboard, faFlask, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Whatwedo = () => {
    return (
        <div class="container" style={{marginTop:"20px",marginBottom:"70px"}}>
        <h1>What We </h1>
        <div class="row row-grid">
          <div class="service">
          <FontAwesomeIcon icon={faBook} style={{fontSize:"29px",marginBottom:"20px"}} />
            <h2>Authoring Services For Researchers | Authors</h2>
            <p>
            We provide a range of services that are a best fit for any stage of research:...
            </p>
            <button class="custom-button1">KNOW MORE</button>
          </div>
          <div class="service">
          <FontAwesomeIcon icon={faBookJournalWhills} style={{fontSize:"29px",marginBottom:"20px"}} />
            <h2>Publishing Through Reseapro Journal | Reseapro Publishing</h2>
            <p>
            Reseapro® Publishing aims to help authors, researchers, academics, and educators...
            </p>
            <button class="custom-button1">KNOW MORE</button>
          </div>
          <div class="service">
          <FontAwesomeIcon icon={faBuildingColumns} style={{fontSize:"29px",marginBottom:"20px"}} />
            <h2>Services For Corporations | Institutes</h2>
            <p>
            We listen to all your corporate documentation needs to deliver...
            </p>
            <button class="custom-button1">KNOW MORE</button>
          </div>
          <div class="service">
          <FontAwesomeIcon icon={faFlask} style={{fontSize:"29px",marginBottom:"20px"}} />
            <h2>Services For Labs | Innovators</h2>
            <p>
            With a thorough understanding of appropriate technology, a pledge of quality , and a relentless...
            </p>
            <button class="custom-button1">KNOW MORE</button>
          </div>
          <div class="service">
          <FontAwesomeIcon icon={faChalkboard}  style={{fontSize:"29px",marginBottom:"20px"}}/>
            <h2>E-Learning | Education Services</h2>
            <p>
            The SARS-CoV-2 pandemic has created a new cohort of students and educators...
            </p>
            <button class="custom-button1">KNOW MORE</button>
          </div>
          <div class="service">
          <FontAwesomeIcon icon={faVideo} style={{fontSize:"29px",marginBottom:"20px"}} />
            <h2>Webinars | Conferences</h2>
            <p>
            Since 2015, Reseapro has offered and conducted a series of Webinars on different aspects of Publishing...
            </p>
            <button class="custom-button1">KNOW MORE</button>
          </div>
        </div>
      </div>
    )
}

export default Whatwedo