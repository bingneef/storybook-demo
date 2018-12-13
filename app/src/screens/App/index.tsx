import React, { useState } from 'react';
import classNames from 'classnames';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import logo from '../../assets/images/sping-logo.png';
import './index.sass';

interface AppProps {
  rotation?: boolean;
  data: Response;
  mutate: any;
}

type Team = {
  _id: string;
  name: string;
};

type Response = {
  teams: [Team];
  loading: boolean;
};

export const App: React.SFC<any> = props => {
  const [highlight, setHighlight] = useState(false);

  if (props.data.loading) {
    return (
      <div data-testid='AppLoading'>...</div>
    );
  }

  function renderTeamNames() {
    if (props.data.teams !== undefined) {
      return props.data.teams.map((team: Team) => (
        <p key={team._id} data-testid="content">{team.name}</p>
      ))
    }
  }

  return (
    <div className="App" data-testid='AppRoot'>
      <header className="App-header">
        <img src={logo} onClick={() => setHighlight(!highlight)} className={classNames('App-brand', { 'App-rotating-border': props.rotation })} />
        { highlight ? (
          <h3 className="App-slogan">Partner voor <code data-testid='digital-code'>digitale</code> productinnovatie</h3>
        ) : (
          <h3 className="App-slogan">Partner voor digitale productinnovatie</h3>
        )}

        {
          renderTeamNames() 
        }
      </header>
    </div>
  );
}

const TEAMS_QUERY = gql`
  query {
    teams {
      _id
      name
    }
  }
`;

export default graphql<{}, Response, AppProps>(TEAMS_QUERY, {})(App);
