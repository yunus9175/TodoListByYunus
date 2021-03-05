import React from 'react'
import './Signin.css'
function Signin() {
    return (
      <div className="main_div" >
      <div className="center_div">
            <h1 className="myh1">
             SignIn
            </h1>
          
            <div class="row">
            <p id="myp">
       Please Enter Your Username And Password.
            </p>
              </div>
    <div class="row">
        <div class="form-group name1 col-sm-6">
            <input type="text" class="form-control" id="username" placeholder="Username"/>
        </div>
</div>
<div class="row">
        <div class="form-group name1 col-sm-6">
            <input type="password" class="form-control" id="pass" placeholder="Password"/>
        </div>
</div>
<div class="row">
        <div class="form-group name1 col-sm-6">
       <button type="submit" >SignIn</button>
        </div>
</div>
</div>
</div>
    )
}

export default Signin
