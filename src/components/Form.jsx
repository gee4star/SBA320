/* eslint-disable react/prop-types */
import {useNavigate}  from "react-router-dom";
import { useState  } from 'react';

function Form({ getMovie }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ movieTitle: '' });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    if (formData.movieTitle === ""){
      navigate("/displayGif");
    }else{
      navigate("/displayMovie");
    }
    e.preventDefault();
    getMovie(formData.movieTitle);
  }

  // useEffect(() => {
  //   handleChange();
  // }, []);
  return (
    <>
    <h1>Which movie are you looking for?</h1>
     <form onSubmit={handleSubmit}>
      <input
        type='search'
        name='movieTitle'
        onChange={handleChange}
        placeholder='Your Movie Choice...'
      />
      <input type='submit' value='Submit' />
    </form>
    </>
   
  );
}

export default Form;
