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
        }
      }
    }
  }
`;

const GitHubQuery = () => {
  const { loading, data, error } = useQuery(QUERY, {
    variables: { number_of_repos: 3 },
  });

  if (loading) return <div>loading...</div>;
  if (error) return <div>{error.info} </div>;

  console.log(data);
  return <div>hello</div>;
};

export default GitHubQuery;
