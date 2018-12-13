import React, { useState, useCallback } from 'react';
import gql from 'graphql-tag';

import { doMutation } from '../../actions/form';
import Button from '../../components/buttons/index'

interface FormProps {
  history: any,
}
interface SignInProps {
  email: string,
  password: string,
}

const signIn = async({email, password}:SignInProps) => {
  const variables = {
    user: {
      email, 
      password,
    },
  }

  const mutation = gql`
    mutation signIn($user: AuthInput!){
      response:signIn(user: $user) {
        token
      }
    }
  `;

  return doMutation({ variables, mutation });
}

const Form = (props:FormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSignIn = useCallback(async () => {
    const { data, success, error } = await signIn({email, password});
    if (success) {
      props.history.push('/')
    } else {
      setErrorMsg(error);
    }
  }, [email, password]);

  function submitForm():void {
    handleSignIn();
  }

  return (
    <div className="container" data-testid='FormRoot'>
      <h1>Sping form</h1>
      <div className="alert alert-success" role="alert">
        This is a success alert—check it out!
      </div>
      <form>
        { errorMsg }
        <div className="form-group">
          <label>Email address</label>
          <input type="email" data-testid='FormEmail' className="form-control" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
          <div className="form-group">
            <label>Password</label>
          <input type="password" data-testid='FormPassword' className="form-control" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" />
            Check me out
          </label>
        </div>
        <Button type='primary' dataTestid='FormSubmit' title='submit' onClick={submitForm} />
      </form>
    </div>
  );
}
export default Form;