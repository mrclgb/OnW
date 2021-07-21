const Suggest = (props) => {
    const kelvinToFarenheit = (k) => {
        return (k - 273.15).toFixed(2);
    };

    const temp = kelvinToFarenheit(props.temperature);

    const suggestOutfit = () => {
        if (temp <= 10) {
            console.log('less than 10: cold');
            return(
                <iframe title="cold" class="embed-responsive-item"
                src="https://www.google.com/search?igu=1&ei=&q=
                outfit+for+less+than+10+degree+celsius&gbv=1&source=
                lnms&tbm=isch&sa=X&ved=0ahUKEwi-1uq21d_xAhWm_3MBHdygDfUQ_AUICCgB"></iframe>
            )
        } else if (temp > 10 && temp <= 20) {
            console.log('between 10 and 20: quite cold');
            return(
                <iframe title="quite cold" class="embed-responsive-item" 
                src="https://www.google.com/search?igu=1&ei=&q=outfit+for+10-20+degree+celsius"></iframe>
            )
        } else if (temp > 20 && temp <= 30) {
            console.log('between 20 and 30: a bit hot');
            return(
                <iframe class="embed-responsive-item" title="a bit hot"
                src="https://www.google.com/search?igu=1&ei=&q=outfit+for+20-30+degree+celsius"></iframe>
            )
        } else {
            console.log('more than 30: really hot');
            return(
                <iframe class="embed-responsive-item" width="980" height="600" title="really hot" 
                src="https://www.google.com/search?igu=1&ei=&q=outfit+for+more+than+30+degree+celsius"></iframe>
            )
        }
    }

    return(
        <div className='embed-responsive embed-responsive-16by9'>            
            {suggestOutfit()} 
        </div>
    )
}

export default Suggest