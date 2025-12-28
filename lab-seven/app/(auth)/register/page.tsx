import React from 'react'

export default function RegisterPage() {
  return <form>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Username</label>
    <input type="text" className="form-control" id="exampleInputUsername1"/>
    </div>
    <div className="mb-3">
    <label  className="form-label">Full Name</label>
    <input type="text" className="form-control" id="exampleInputFullname1"/>
    </div>
    <div className="mb-3">
    <label  className="form-label">Phone Number</label>
    <input type="text" className="form-control" id="exampleInputPhone1"/>
    </div>
    <div className="mb-3">
    <label  className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputAddress1"/>
    </div>
    <div className="mb-3">
    <label  className="form-label">Date of Birth</label>
    <input type="date" className="form-control" id="exampleInputDOB1"/>
    </div>
    <di
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label">Check me out</label>
  </div>



  <button type="submit" className="btn btn-primary">Register</button>
</form>;
}
