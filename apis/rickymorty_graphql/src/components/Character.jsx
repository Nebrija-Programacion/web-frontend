import React from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const QUERY = gql`
  query GetCharactersByName($name: String!) {
    characters(page: 1, filter: { name: $name }) {
      results {
        name
        id
      }
    }
  }
`;

const FILTERED_QUERY = gql`
  query GetCharactersByName($name: String!) {
    characters(page: 1, filter: { name: $name, status: "alive" }) {
      results {
        name
        id
      }
    }
  }
`;

const Character = (props) => {
  const { loading, error, data, refetch, networkStatus } = useQuery(QUERY, {
    variables: { name: props.name },
    notifyOnNetworkStatusChange: true,
  });

  // const [getAlive, { filteredData, filtering }] = useLazyQuery(FILTERED_QUERY);
  // const [finalData, setFinalData] = useState(null);

  if (networkStatus === 4) return <p>Refetching...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Character not found!</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Actualizar</button>

      {data.characters.results.map((ch) => (
        <p key={ch.id}>{ch.name}</p>
      ))}
    </div>
  );
};

export default Character;
