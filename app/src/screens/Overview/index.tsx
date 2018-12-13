import React, { useState, useCallback } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

interface OverviewProps {
}

interface TeamProps {
  _id: string,
  name: string,
}

export const renderTeamRow = ({ _id, name }: TeamProps) => {
  return (
    <tr>
      <th>{ _id }</th>
      <th>{ name }</th>
    </tr>
  )
}

export const Overview: React.SFC<any> = props => {
  if (props.data.loading) {
    return (
      <div className='container' data-testid='OverviewRoot'>
        <h3>Loading..</h3>
      </div>
    )
  }

  const hasTeams = props.data && props.data.teams && props.data.teams.length;

  return (
    <div className='container' data-testid='OverviewRoot'>
      <h1>Sping Overview</h1>
      { hasTeams ? (
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            { props.data.teams.map(renderTeamRow) }
          </tbody>
        </table>
      ) : (
        <h4>You have no teams 🔥</h4>
      )}
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

export default graphql<{}, Response, {}>(TEAMS_QUERY, {})(Overview);