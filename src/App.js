import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from './Header'
import styled from 'styled-components'
import Image from './Image'
import "./App.css";

function App() {
  const [ nasaPhoto, setNasaPhoto ] = useState();

  useEffect(() =>{
   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
   .then((res) =>{
     console.log(res.data);
     setNasaPhoto(res.data)
   })
   .catch(err => console.log(err))
 }, [])
 
 if (!nasaPhoto) return <h3>Loading...</h3>;

  return (
    <StyledApp className="App">
    <Header />
    <Image title={nasaPhoto.title} photo={nasaPhoto.url} date={nasaPhoto.date} details={nasaPhoto.explanation} />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  color: white;
  background-Color: #003366;
`;

export default App;
