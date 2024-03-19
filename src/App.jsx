import './App.css';
import { Link, useState, useEffect } from 'react';
import MovieDisplay from './pages/MovieDisplay';
import GifDisplay from './pages/GifDisplay';
// import {MoviePicker, movieInfo} from './components/MoviePicker';
import Form from './components/Form';
import  {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
// import {MovieDisplay} from "./pages/MovieDisplay"

// import axios from 'axios';
// import GifDisplay from './components/GifDisplay';
// import Home from './pages/Home';
export const gifsArray = [
  {
    Title: "The Twilight Zone 1",
    Genre: "Sci-Fi",
    Poster: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGpmMDhsMXZvcm5iM2hoYzcwYTk3NnFoYmVlb3IzbTY2MjF4NjdhOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/QVabUkkCwhAwpdzPuX/giphy.gif",
    Year: "1964"
  },
  {
    Title: "The Twilight Zone 2",
    Genre: "Sci-Fi",
    Poster: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGpmMDhsMXZvcm5iM2hoYzcwYTk3NnFoYmVlb3IzbTY2MjF4NjdhOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lPovBpTJGHmfzFXAML/giphy.gif",
    Year: "1964"
  },
  {
    Title: "The Twilight Zone 3",
    Genre: "Sci-Fi",
    Poster: "https://media.giphy.com/media/QA21AYfqlmd98UlFVf/giphy.gif?cid=790b7611hjf08l1vornb3hhc70a976qhbeeor3m6621x67a9&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    Year: "1964"
  },
  {
    Title: "The Twilight Zone 4",
    Genre: "Sci-Fi",
    Poster: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGpmMDhsMXZvcm5iM2hoYzcwYTk3NnFoYmVlb3IzbTY2MjF4NjdhOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WVGLVeGh5RoZucADXY/giphy.gif",
    Year: "1964"
  },
  {
    Title: "The Twilight Zone 5",
    Genre: "Sci-Fi",
    Poster: "https://media.giphy.com/media/MZpA2B8bX8uSBDmdRY/giphy.gif?cid=790b7611hjf08l1vornb3hhc70a976qhbeeor3m6621x67a9&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    Year: "1964"
  },
]


function App() {
 
  const [movieInfo, setMovieInfo] = useState(null);
  const [gifData, setGifData] = useState(null)

  async function moviePicker(movieTitle) {
    try {
      if (movieTitle === "" ) {
        let randomObj = gifsArray[(Math.floor(Math.random() * gifsArray.length))]
        console.log("Wow!", randomObj)
        setGifData(randomObj)
      } else {
        let res = fetch(`http://www.omdbapi.com/?apikey=${
               import.meta.env.VITE_API_Key
             }&t=${movieTitle}`, 
             {
          method: 'GET',
        })
          .then( 
            res => res.json()
          )
          .then(data => {
            console.log(data)
            
          })
          .catch(error => {
       
           console.log(error);
          })
        setMovieInfo(res.data)
      }
    } catch (err) {
      console.error(err);
    }
  }
  useEffect( () => {
    moviePicker('')
   }, []);
  // useEffect(async () => {
  //  const movieData = await moviePicker('')
  //  setMovieInfo(movieData)
  // }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await MyAPI.getData(someId);
  //     // ...
  //   }
  //   fetchData();
  // }, [someId]); // Or [] if effect doesn't need props or state
  
  //Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetchingeslintreact-hooks/exhaustive-deps

  // console.log(import.meta.env.VITE_API_Key);


  return (

    <>
    <h1> Film Reels</h1>
      <h1> Movie Picker App</h1>
    <nav>
      <ul>
          {/* <Link to="/">Home </Link>
          <Link to="/choose">Select Movie</Link> */}
      </ul>
    </nav>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <MovieDisplay movie={movieInfo} /> */}
      <Route path="/choose" element={<Form getMovie={moviePicker}/>}></Route>
      {/* <Form getMovie={moviePicker} /> */}
      <Route path="/displayMovie" element={<MovieDisplay movie={movieInfo}  />}/>
      <Route path="/displayGif" element={<GifDisplay gif={ gifData}  />}/>

    </Routes>
    </>
  );
}

export default App;
