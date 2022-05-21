import React from "react";

const About = (props) => {
    console.log('Props>>', props);
    return(
        <div>
            <h1>My name is {props.name}</h1>
            <h2>Age is {props.age} </h2>
        </div>
    )
}

export default About;