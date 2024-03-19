// import React from "react";
import { Link } from "react-router-dom";

export default function MovieDisplay({ movie }){
   console.log("Movie", movie)

  // Function to return loaded JSX
   const loaded = () => {
    console.log("Whats up")
    return (
      
      <>
       
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
        <nav>
      <ul>
          <Link to="/choose">Choose Another Movie</Link>
      </ul>
    </nav>
      </>
    );
  };

  // Function to return loading JSX
  const loading = () => {
    return <>
    <h1>Movie is in the console.</h1> 
    <nav>
    <ul>
        <Link to="/choose">Check the console! Your movie title is there. Then Choose Another Movie</Link>
    </ul>
  </nav>
  </>
  };

  // Ternary operator will determine which functions JSX we will return
  return movie ? loaded() : loading();

  //need to check how to only render page after data has populated
}
