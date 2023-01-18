import axios from 'axios'
import React,{useState,useEffect} from 'react'

const WeatherApi = () => {
    const [weather, setWeather]=useState([])
    const getWeather=async()=>{
        const response = await axios.get("https://www.weatherapi.com/docs/conditions.json")
        const output= await response.data;
        console.log(output);
        setWeather(output)
    }
    useEffect(()=>{
        getWeather();
    },[])
  return (
    <>
        <h1>WeatherApi</h1>
        <div className="container">
                <div className="row">
                    {weather.map((user) => {
                        return (
                            <div className="col-md-4" key={user.id}>
                                <div className="card cardd">Category: {user.code}
                                    <div className="card-body">
                                        <h5 className="card-title bg bg-warning">Date:{user.day}</h5>
                                        <h5 className="card-title bg bg-success">Date:{user.icon}</h5>
                                        <h5 className="card-title">Date:{user.night}</h5>
                                        {user.languages.map((item) => {
                                            return (
                                                <>
                                                    <div key={item.id}>
                                                        <h5 className="card-title">Language-name:{item.lang_name}</h5>
                                                        <h5 className="card-title">Language-iso:{item.lang_iso}</h5>
                                                        <h5 className="card-title">Language-text:{item.day_text}</h5>
                                                        <h5 className="card-title bg bg-info">Language-text:{item.night_text}</h5>
                                                    </div>
                                                </>
                                            )})}
                                        <a href="#" className="btn btn-primary">WeatherDetails</a>
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
            </div>

    </>
  )
}

export default WeatherApi