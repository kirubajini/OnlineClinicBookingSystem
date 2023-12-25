import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './About.css';
import About from './About.jpg';
import Doctor from './Doctor.jpg';
import card1 from './card1.jpg';
import card2 from './card2.jpg';
import card3 from './card3.jpg';
import Doctor3 from './Doctor3.jpg';
import Doctor4 from './Doctor4.jpg';
import Doctor1 from './Doctor1.jpg';








const Aboutus = () => {
    return(< div className="">
            <img src={About} alt="" className="h-100 w-100 heroimage position-absolute object-fit-cover"/> 
            <div className="container p-3 ">
            
                <div className="row w-100">
                    <div className="col-md-6">
                    </div>
                    
                    <div className="col-md-6">
                        <div className="row w-100 align-items-center">
                            <div className="col-md-5 ">
                                <div className="card mt-5 p-4 bg-opacity-25 bg-white">
                                    <h2 style={{color:"white"}}> <b>Vision:</b></h2>
                                    <p class="card-text text-justify ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>

                            </div>
                            <div className="col-md-2">

                            </div>
                            <div className="col-md-5 ">
                                <div className="card mt-5 p-4 bg-opacity-25 bg-white">
                                    <h2 style={{color:"white"}}><b>Mission:</b></h2>
                                    <p class="card-text ">Our mission is to provide the best quality medical and nursing care to our valued patients meeting the international standards</p>

                                </div>

                            </div>

                        </div>
                    </div>
                    
                </div>
              
            </div>
            {/* <div class="card-group" style={{width:"75%", paddingLeft:"450px"}}>
                <div class="card" style={{textAlign:"center", padding:"25px 25px",border:"1px solid rgba(43, 38, 38, 0.3)", backgroundColor:"rgba(39, 36, 36, 0.2)", borderRadius:"18px",boxShadow:"0 40px 30px rgba(0, 0, 0, 0.1)"}}>
                    <img src={card3}  alt="..." />
                </div>
                
                <div class="card" style={{textAlign:"center", padding:"25px 25px",border:"1px solid rgba(43, 38, 38, 0.3)", backgroundColor:"rgba(39, 36, 36, 0.2)", borderRadius:"18px",boxShadow:"0 40px 30px rgba(0, 0, 0, 0.1)"}}>
                    <img src={Doctor1}  alt="..."/>
                    <div class="card-img-overlay">
                        <h3 class="card-title" style={{color:"blue", paddingTop:"75px"}}>Vision:</h3><br></br><br></br>
                        <p class="card-text ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            
                <div class="card" style={{textAlign:"center", padding:"25px 25px",border:"1px solid rgba(43, 38, 38, 0.3)", backgroundColor:"rgba(39, 36, 36, 0.2)", borderRadius:"18px",boxShadow:"0 40px 30px rgba(0, 0, 0, 0.1)"}}>
                    <img src={card1}  alt="..."/>
                </div>
        
            </div>
            <div class="card-group" style={{width:"75%", paddingLeft:"450px"}}>
                <div class="card" style={{textAlign:"center", padding:"25px 25px",border:"1px solid rgba(43, 38, 38, 0.3)", backgroundColor:"rgba(39, 36, 36, 0.2)", borderRadius:"18px",boxShadow:"0 40px 30px rgba(0, 0, 0, 0.1)"}}>
                    <img src={Doctor3}  alt="..."/>
                    <div class="card-img-overlay">
                    <h3 class="card-title" style={{color:"blue", paddingTop:"75px"}}>Mission:</h3><br></br><br></br>
                        <p class="card-text ">Our mission is to provide the best quality medical and nursing care to our valued patients meeting the international standards</p>
                    </div>
                </div>
            
                <div class="card" style={{textAlign:"center", padding:"25px 25px",border:"1px solid rgba(43, 38, 38, 0.3)", backgroundColor:"rgba(39, 36, 36, 0.2)", borderRadius:"18px",boxShadow:"0 40px 30px rgba(0, 0, 0, 0.1)"}}>
                    <img src={card2}  alt="..."/>
                </div>
            
    
                <div class="card" style={{textAlign:"center", padding:"25px 25px",border:"1px solid rgba(43, 38, 38, 0.3)", backgroundColor:"rgba(39, 36, 36, 0.2)", borderRadius:"18px",boxShadow:"0 40px 30px rgba(0, 0, 0, 0.1)"}}>
                    <img src={Doctor4}  alt="..."/>
                    <div class="card-img-overlay">
                    <h3 class="card-title" style={{color:"blue", paddingTop:"75px"}}>Objective:</h3><br></br><br></br>
                        <p class="card-text ">To promote the benefit of health care services without distinction of gender, race, colour or political, religious or other opinions or characteristics of individuals.</p>
                    </div>
                </div>
                
            </div> */}
    
    </div>
    )
}

export default Aboutus