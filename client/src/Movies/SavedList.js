import React from "react";
import { Link, Route } from "react-router-dom";

export default function SavedList(props) {
  // const goHome = () => {
  //   <Link to={"http://localhost:3000"} />;
  //   // props.history.push(`/`);
  // };

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button">
        <Link to={"/"}>Home</Link>
        <Route path="/" component="App" />
      </div>
    </div>
  );
}
