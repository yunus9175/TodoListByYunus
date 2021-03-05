import React from 'react'

function Forgetpassword() {
    return (
        <div className="main_div" >
        <div className="center_div">
          <h1 className="myh1">
           Forget Password
          </h1>

          <div class="row">
          <p id="myp">
     Please Enter Your New And Confirm Password.
          </p>
            </div>
  <div class="row">
      <div class="form-group name1 col-sm-6">
          <input type="password" class="form-control" id="npass" placeholder="New password"/>
      </div>
</div>
<div class="row">
      <div class="form-group name1 col-sm-6">
          <input type="password" class="form-control" id="cpass" placeholder="Confirm password"/>
      </div>
</div>
<div class="row">
      <div class="form-group name1 col-sm-6">
     <button type="submit" >Forget Password</button>
      </div>
</div>
</div>
</div>
    )
}

export default Forgetpassword
