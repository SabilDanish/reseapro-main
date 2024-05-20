import './Whatwedo.css'
import HowWork from "../../utils/images/HowWork.PNG";



const Whatwedo = () => {
    return (
        <div class="container" style={{marginBottom:"35px"}}>
            <div class="row">

            <div class="col-md-12 col-sm-12 col-xs-12">
            <h2 className='ContentHead ContentHeadWhyChooseUs'>What We Do</h2>
            <div class="dividerzz"></div>
            </div>

                
                    <div class="col-md-12 col-lg-4 col-sm-12 col-xs-12 ">
                        <div class="left_right_font left_face_content">
                            <h3>Lorem Ipsum</h3>
                            <p>
                                text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            </p>
                        </div>

                        <div class="left_right_font left_face_content paddding_right_50 p-t-70 responsive_m-b-40">
                            <h3>Why do we use it?</h3>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
                            </p>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-4 col-sm-12 col-xs-12 paddonig">
                        <div class="round_circle_box">
                            <div class="logo_center">
                                <img  src={HowWork} class="wow zoomIn animated MainImg" alt='howwork'/>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-12 col-lg-4 col-sm-12 col-xs-12">
                        <div class="left_right_font right_face_content">
                            <h3>Where can I get some</h3>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words isn't anything embarrassing                        </p>
                        </div>
                        <div class="left_right_font right_face_content paddding_left_50 p-t-70 Padding0">
                            <h3>Where does it come</h3>
                            <p>
                                ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            </p>
                        </div>
                    </div>

                
                <div class="col-md-12 col-sm-12 col-xs-12 centroid">  
                    <div class="col-md-12 col-lg-4 col-sm-12 col-xs-12 text_face_ceneter left_right_font p-t-40 Padding0">
                        <h3>Transparency</h3>
                        <p>With fluid and transparent communication and seamless integration into your style of work, we bring an ease of interaction and process</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whatwedo