import React from "react";
import {
    Routes ,
    Route,
} from "react-router-dom";
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import FavoritePage from '../pages/Favorite';
import ProfilePage from '../pages/Profile';
 

const routes = () => {
    return(
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>

                <Route exact path="/about" element={<AboutPage/>}/>

                <Route exact path="/favorite" element={<FavoritePage/>}/>

                <Route exact path="/profile" element={<ProfilePage/>}/>

            </Routes>
    )
}

export default routes;