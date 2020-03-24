import React, {useState} from "react";
import Layout from "../core/Layout";
import { API } from "../config";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    emal: "",
    password: "",
    success: false
  });

 {/* high end function - returns another function*/}
  const handleChange  = name => event => {
    setValues ({...values, error: false, [name]: event.target.value})
  }

  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input onChange={handleChange('name')} type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input onChange={handleChange('email')}  type="email" className="form-control" />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input onChange={handleChange('password')} type="password" className="form-control" />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
  return (
    <Layout
      title="Signup"
      description="signup Full stack app"
      className="container-fluid"
    >
      {signUpForm()}
      {JSON.stringify(values)}
    </Layout>
  );
};

export default Signup;