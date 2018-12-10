import React, { useState } from 'react';
import classNames from 'classnames';
import logo from '../../assets/images/sping-logo.png';
import './index.sass';

interface AppProps {
  rotation?: boolean,
}

const App = (props:AppProps) => {
  const [highlight, setHighlight] = useState(false);

  return (
    <div className="App" data-testid='AppRoot'>
      <header className="App-header">
        <img src={logo} onClick={() => setHighlight(!highlight)} className={classNames('App-brand', { 'App-rotating-border': props.rotation })} />
        { highlight ? (
          <h3 className="App-slogan">Partner voor <code data-testid='digital-code'>digitale</code> productinnovatie</h3>
        ) : (
          <h3 className="App-slogan">Partner voor digitale productinnovatie</h3>
        )}
      </header>
    </div>
  );
}

export default App;
