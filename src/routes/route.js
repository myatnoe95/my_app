import React from "react";
import {
    Routes ,
    Route,
} from "react-router-dom";
 

const routes = () => {
    return(
            <Routes>
                <Route path="/about" element={<About/>}/>

                <Route path="/users" element={<Users/>}/>

                <Route path="/" element={<Home/>}/>
            </Routes>
    )
}

function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }

export default routes;