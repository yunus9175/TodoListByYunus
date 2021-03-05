import React from 'react'

function Signup() {
    return (
        <div className="main_div" >
        <div className="center_div">
              <h1 className="myh1">
           SignUp
          </h1>
    
          <div class="row">
          <p id="myp">
     Please Enter Your All Details Information.
          </p>
            </div>
  <div class="row">
      <div class="form-group name1 col-sm-6">
          <input type="text" class="form-control" id="Fname" placeholder="Username"/>
      </div>
      </div>
<div class="row">
      <div class="form-group name1 col-sm-6">
          <input type="phone" class="form-control" id="Fname" placeholder="Phone"/>
      </div>
</div>
<div class="row">
      <div class="form-group name1 col-sm-6">
          <input type="email" class="form-control" id="Fname" placeholder="Email"/>
      </div>
</div>
<div class="row">
      <div class="form-group name1 col-sm-6">
          <input type="password" class="form-control" id="Fname" placeholder="Password"/>
      </div>
</div>
<div class="row">
      <div class="form-group name1 col-sm-6">
     <button type="submit" >SignUp</button>
      </div>
</div>
</div>
</div>
    )
}

export default Signup
