import React, { useState, useEffect} from 'react';
import Suggest from './Suggest';

const InputCity = () => {
    // usestate
    const [city, setCity] = useState({});
    const [input, setInput] = useState('');
    const [submit, setSubmit] = useState('');

    // api values
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_URL = `${process.env.REACT_APP_API_URL}/weather?q=${submit}&appid=${API_KEY}`;
    const API_ICON = process.env.REACT_APP_ICON_URL;

    // use state
    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((city) => setCity(city));    
    }, [API_URL]);

    // functions
    const inputHandler = (event) => {
        setInput(event.target.value);
    };
      
    const submitHandler = () => {
        setSubmit(input);
    };

    const kelvinToFarenheit = (k) => {
        return (k - 273.15).toFixed(2);
    };
    

    return (
        <>
            <div>
                <label htmlFor="city">City</label>
            </div>
            <div>
                <input 
                type="text"
                id="city"
                className="form-control"
                onChange={inputHandler}
                value={input}
                />
            </div><br/>
            <div>
                <button className="btn btn-primary" onClick={submitHandler}>
                Search
                </button>
            </div>
            <br/>
            {city.main &&
                <div className="card mx-auto" style={{width: '100%'}}>
                    <div className="card-body text-center">
                        <img
                        src={`${API_ICON}/${city.weather[0].icon}.png`}
                        alt="weather status icon"
                        className="weather-icon"
                        />
                        <p className="h2">
                        {kelvinToFarenheit(city.main.temp)}&deg; C
                        </p>
                        <p className="h5">
                        {' '}
                        <strong>{city.name}</strong>
                        </p>
                        <p>
                        {city.weather[0].description}
                        </p>
                        <div>
                        <p>
                            🌡️{' '}
                            The high will be {kelvinToFarenheit(city.main.temp_max)}&deg; C,
                            and the low will be {kelvinToFarenheit(city.main.temp_min)}&deg; C                      
                        </p>
                        <p>
                            Cloudiness is {city.clouds.all}%
                        </p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            }
            { city.main && 
            <Suggest temperature={city.main.temp} /> 
            }
        </>
    )
}

export default InputCity