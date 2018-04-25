import React from "react";
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';
const API_KEY = "8e69ab9a4e08839f5cf34327293d8c86";

class App extends React.Component{

  state = {
    temparature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }
  weather =async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const data = await api_call.json();
    if(city && country){
      console.log(data);
      this.setState({
        temparature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      })
    }else{
      this.setState({
        temparature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please give city and country",
      })
    }
  }
  render(){
    return(
      <div>
       <div className="wrapper">
         <div className="main">
           <div className="container">
             <div className="row">
               <div className="col-xs-5 title-container">
                <Title />
               </div>
               <div className="col-xs-7 form-container"> 
                  <Form weather = {this.weather}/>
                  <Weather 
                    temparature ={this.state.temparature}
                    city = {this.state.city}
                    country = {this.state.country}
                    humidity = {this.state.humidity}
                    description = {this.state.description}
                    error = {this.state.error}
                  />
               </div>
             </div>
           </div>
         </div>
       </div>
      </div>
    );
  }
}
 
        

export default App;