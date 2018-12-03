import React, { Component } from 'react';
import classNames from 'classnames';
import logo from '../../assets/images/sping-logo.png';
import './index.sass';

interface AppProps {
  rotation?: boolean,
}

const App = (props:AppProps) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={classNames('App-brand', { 'App-rotating-border': props.rotation })} />
        <h3 className="App-slogan">Partner voor <code>digitale</code> productinnovatie</h3>
      </header>
    </div>
  );
}

export default App;
