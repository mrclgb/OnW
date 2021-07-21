 const GeolocationCity = () => {
    // use states
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    
    // api variables
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_ICON = process.env.REACT_APP_ICON_URL;
     
    // function
    const locationHandler = () => {
        const fetchData = () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result);
                console.log(result);
            });
        }
        console.log(lat);
        console.log(long);
        fetchData(); 
    }

    return(
    <div id='geoLo'>    
        <div>
          <button className="btn btn-primary" onClick={locationHandler}>
            Locate
          </button>
        </div><br/>
        {data.main &&
          <div className="card mx-auto" style={{width: '50%'}}>
            <div className="card-body text-center">
              <img
                src={`${API_ICON}/${data.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />
              <p className="h2">
                {(data.main.temp)}&deg; C
              </p>
              <p className="h5">
                {' '}
                <strong>{data.name}</strong>
              </p>
              <p>
                {data.weather[0].description}
              </p>
              <div>
                <p>
                  🌡️{' '}
                    The high will be {data.main.temp_max}&deg; C,
                    and the low will be {data.main.temp_min}&deg; C                      
                </p>
                <p>
                  Cloudiness is {data.clouds.all}%
                </p>
              </div>
            </div>          
          </div>
        }
    </div>
    )
 }

 export default GeolocationCity