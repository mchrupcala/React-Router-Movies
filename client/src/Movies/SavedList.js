import React from "react";

const SavedList = props => (
  (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div onClick={goHome} className="home-button">
        Home
      </div>
    </div>
  ),
  function goHome() {
    props.history.push("/");
  }
);

export default SavedList;
