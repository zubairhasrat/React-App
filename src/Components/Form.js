import React from "react";

class Form extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit = {this.props.weather}>
                    <input type="text" name="city"  placeholder="city ..."/>
                    <input type="text" name="country" placeholder="country ..."/>
                    <input type="submit" name="" id="" value="Get Weather"/>
                </form>
            </div>
        );
    }
}

export default Form;