import React, { memo } from 'react';
import Button from '../../components/buttons/index'

interface FormProps {
}

const Form = (props:FormProps) => {
  return (
    <div className="container">
      <h1>Sping form</h1>
      <div className="alert alert-success" role="alert">
        This is a success alert—check it out!
      </div>
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
        </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" />
            Check me out
          </label>
        </div>
        <Button type='primary' title='submit' />
      </form>
    </div>
  );
}
export default Form;