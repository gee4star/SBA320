import { Link } from "react-router-dom";
{/* <link rel="stylesheet" href="GifDisplay.css" /> */}

export default function GifDisplay({ gif }){
    // Function to return loaded JSX
    const loaded = () => {
      return (
        <>
        
          <h1>{gif.Title}</h1>
          <h2>{gif.Genre}</h2>
          <img src={gif.Poster} alt={gif.Title} />
          <h2>{gif.Year}</h2>
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
      return <h1>No Gif or Movie to Display</h1>;
    };
  
    // Ternary operator will determine which functions JSX we will return
    return gif ? loaded() : loading();
  }