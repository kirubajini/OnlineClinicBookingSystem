import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Appoint from "./Appoint.jpeg";



const Contactus = () => {
    return(<>
    <center>
        <div class="card mb-3" style={{marginTop:"130px", width:"1200px", height:"730px",padding: "25px 25px",border: "1px solid rgba(240, 227, 227, 0.3)", borderRadius: "18px", boxShadow:"50px 40px 30px rgba(252, 251, 251, 0.1)"}}>
  <div className="row g-0">
    <div class="col-md-4">
    <img src={Appoint} alt="" style={{height:"575px",width:"250px", marginRight:"220px"}}/> 
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style={{color:"blue",fontSize:"30px"}}><b>Lets Protect Yourself and<br></br> those Around you by Vaccinating</b></h5><br></br>
        {/* <p class="card-text" style={{color:"black"}}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
        <form>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label" style={{color:"black",marginRight:"550px",fontSize:"20px"}}>I am registering for</label><br></br>
                <div class="form-check form-check-inline"style={{fontSize:"20px"}}>
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1" style={{color:"black"}}>My Self</label>
                </div>
                <div class="form-check form-check-inline" style={{fontSize:"20px",marginLeft:"100px"}}>
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                    <label class="form-check-label" for="inlineRadio2" style={{color:"black"}}>Other People</label>
                </div> <br></br>
                <div class="col-12">
                    <label for="inputAddress" class="form-label" style={{color:"black",marginRight:"550px",fontSize:"20px"}}>Patient's FullName</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Full Name" style={{marginLeft:"30px"}}/>
                </div> 
                <div class="row">
                    <div class="col-sm-7">
                        <label class="form-label" style={{color:"black",marginRight:"550px",fontSize:"20px"}}>MobileNumber</label>
                        <input type="text" class="form-control" placeholder="Mobile Number" aria-label="First name"style={{marginLeft:"30px"}}/>
                    </div>
                    <div class="col-sm">
                        <label class="visually-hidden" for="specificSizeSelect">Preference</label>
                        <button class="btn btn-primary" type="submit" style={{marginTop:"45px"}}>Verify</button>
                    </div>
                </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label" style={{color:"black",marginRight:"650px",fontSize:"20px"}}>Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"style={{marginLeft:"30px"}}/>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <label for="inputAddress" class="form-label" style={{color:"black",marginRight:"550px",fontSize:"20px"}}>Patient'sIDNumber</label>
                            <div class="col-sm-3">
                                <label class="visually-hidden" for="specificSizeSelect">Preference</label>
                                <select class="form-select" id="specificSizeSelect">
                                    <option selected>ID TYPE</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div> 
                            <div class="col-sm-3">
                                <label class="visually-hidden" for="specificSizeInputName"style={{color:"black"}}>ID Number</label>
                                <input type="text" class="form-control" id="specificSizeInputName" placeholder="Jane Doe" style={{marginLeft:"30px"}}/>
                            </div>  
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="submit">Submit</button>
                        </div>
                       
                    </div>
                    
                </div>          
        </form>
      </div>
    </div>
  </div>
</div>
 </center>       

        

    
    </>
        
    )
}

export default Contactus