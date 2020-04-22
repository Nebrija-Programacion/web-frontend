import React from "react";
import { gql, useQuery } from "@apollo/client";
import "./Albums.css";
import placeholderImage from "./album-placeholder.png";

const ALBUMS_QUERY = gql`
  query Albums($artistId: ID!) {
    node(id: $artistId) {
      __typename
      ... on Artist {
        name
        releases(type: [ALBUM], first: 20) {
          nodes {
            id
            title
            coverArtArchive {
              front(size: SMALL)
            }
          }
        }
      }
    }
  }
`;

const Albums = ({ artistId }) => {
  const { loading, error, data } = useQuery(ALBUMS_QUERY, {
    variables: { artistId },
  });

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  const artistName = data.node.name;
  const albums = data.node.releases.nodes;

  return (
    <div>
      <h1>Albums de {artistName}</h1>
      <div className="Albums">
        {albums.map((album) => (
          <div key={album.id} className="Albums-item">
            {album.coverArtArchive.front ? (
              <img src={album.coverArtArchive.front} alt={album.title} />
            ) : (
              <img src={placeholderImage} alt={album.title} />
            )}
            <p>{album.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
