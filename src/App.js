import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  
  const getApiData = async (lat, long) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=40ce40e3254302084831efa372ed8341`
    const { data } = await axios.get(url)

    dispatch({type: "SET_WEATHER_API", payload: data})
  }

 const onClickSyd = () => {
   getApiData(-33.891525, 151.224121)
 }

  return ( <><button onClick={onClickSyd()}>Sydney</button></> );
}
 
export default App;

