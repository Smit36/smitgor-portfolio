import React, { Component } from "react";
import './about.css';

class About extends Component{
    render(){
        return(
            <div className='About'>
                <div className='About-Header-Name'>
                    About<span></span>
                </div>
                <div className='About-Content'>
                    My name is Smit Gor pursuing my bacelor's degree from Gujarat Technological University, India
                </div>
            </div>
        );
    }
}

export default About;