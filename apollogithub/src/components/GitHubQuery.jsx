import React from "react";

import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const QUERY = gql`
  query getRepos($number_of_repos: Int!) {
    viewer {
      name
      repositories(last: $number_of_repos) {
        nodes {
          name
          id
        }
      }
    }
  }
`;

const GitHubQuery = () => {
  const { loading, data, error } = useQuery(QUERY, {
    variables: { number_of_repos: 100 },
  });

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error: {error} </div>;

  return (
    <div>
      <p>User: {data.viewer.name} </p>
      <p>Repos:</p>
      <ul>
        {data.viewer.repositories.nodes.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubQuery;
