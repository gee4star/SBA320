// import  Form  from "../components/Form"
// import  MovieDisplay  from "../pages/MovieDisplay"
// import {moviePicker, } from "../App.jsx"
import { Link } from "react-router-dom"
console.log("Hi")
export default function Home(){
    return(
    <>
    {/* <h1>Im the home screen</h1> */}
    <h2>Home Screen</h2>
    <nav>
        <ul>
            <Link to="/"> 
            Home
            </Link>
            
            <Link to="/choose">
                Movies
            </Link>
            
        </ul>
    </nav>
      {/* <Form getMovie={moviePicker} /> */}
      {/* <GifDisplay gif={gifData}></GifDisplay> */}
    </>
    )
}