import React from "react";
import { Link } from "react-router-dom";

const listArtists = ({ artistData }) => {
  if (artistData) {
    return artistData.map((item) => {
      const style = {
        background: `url('/images/covers/${item.cover}.jpg')`,
      };
      return (
        <Link
          to={`/artist/${item.id}`}
          key={item.id}
          className="artist_item"
          style={style}
        >
          <div>{item.name}</div>
        </Link>
      );
    });
  }
};

const ArtistList = (props) => {
  return (
    <div className="artist_list">
      <h4>Browse the Artists</h4>
      {listArtists(props)}
    </div>
  );
};
export default ArtistList;
