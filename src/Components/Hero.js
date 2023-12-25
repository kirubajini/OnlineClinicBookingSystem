import React from "react";
import "./Hero.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Doctor2 from './Doctor2.jpg';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Hero = () => {
    return ( <>
     <div className="position-relative"> 
            <img src={Doctor2} alt="" className="w-100 heroimage" style={{height:"600px",objectFit:"cover"}}  /> 
                <div className="position-absolute top-50 Bottom-50 text-center" style={{left:"55%"}}>
                    <h1 className="text-light-emphasis" style={{fontSize:"60px"}}>We have Best Medicare<br/>
                        <span>plan options for you</span>
                    </h1>
                    <p style={{fontSize:"22px", color:"#"}}>We are dedicated to delivering comprehensive and personalized healthcare solutions <br/>
                     that integrate our medical expertise with a compassionate approach</p>
                        <button class="btn  btn-lg" type="button" style={{borderRadius: "15px", boxSizing:"border-box", backgroundColor:"#151B54", color:"white"}}>Read More</button>
           
                </div>
                
     </div> 

<div className="card-group">
  <div className="card" style={{backgroundColor:"#eceff1"}}> {/* Add marginBottom style */}
  
    <div className="card-body ">
    <i className="bi bi-diagram-2-fill" style={{ color: '#000080',fontSize:"30px" }}></i>
      <h5 className="card-title text-center"style={{color:"#1D2951"}}><b>Best Treatment</b></h5>
      <p class="card-text text-justify">Our clinic is dedicated to providing the best treatment options available. With a team of highly skilled doctors and advanced medical technologies, we strive to deliver top-quality care to our patients. Your health and well-being are our utmost priority.
</p>
    </div>
  </div>
  <div className="card" style={{backgroundColor:"#cfd8dc"}}>
    <div className="card-body ">
    <i className="bi bi-telephone-fill" style={{ color: '#000080',fontSize:"30px" }}></i>
      <h5 className="card-title text-center"style={{color:"#1D2951"}}><b>Emergency Help</b></h5>
      <p className="card-text text-justify">In case of emergencies, our clinic is here to provide immediate assistance. Our trained medical staff is equipped to handle any urgent situation with promptness and expertise. Rest assured that you will receive the necessary care and attention when you need it the most.
</p>
    </div>
  </div>

  <div class="card" style={{backgroundColor:"#b0bec5"}} >
    <div class="card-body ">
    <i className="bi bi-person-fill" style={{ color: '#000080',fontSize:"30px" }}></i>
      <h5 class="card-title text-center" style={{color:"#1D2951"}}><b>Medical Staff</b></h5>
      <p class="card-text text-justify">Our clinic is proud to have a team of experienced and compassionate medical professionals. From doctors to nurses, technicians to support staff, our dedicated team works collaboratively to ensure comprehensive healthcare services. You can trust our skilled professionals to guide you on your journey to better health.
</p>

    </div>
    
  </div>
  <div class="card" style={{backgroundColor:"#90a4ae"}} >
    <div class="card-body ">
    <i className="bi bi-heart-fill" style={{ color: '#000080',fontSize:"30px" }}></i>
      <h5 class="card-title text-center" style={{color:"#1D2951"}}><b>Our Services</b></h5>
      <p class="card-text text-justify">At our clinic, we offer a wide range of services to meet your healthcare needs. From preventive care to specialized treatments, we aim to provide comprehensive medical solutions. Whether you require diagnostic tests, consultations, or ongoing care, our services are designed to cater to your unique requirements.</p>
    </div>
    
    
  </div>
</div>

    

        
        
        </>);
};


export default Hero;