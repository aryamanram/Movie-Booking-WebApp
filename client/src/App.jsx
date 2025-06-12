import React from 'react'
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import SeatLayout from "./pages/SeatLayout.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import Favorite from "./pages/Favorite.jsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/movies" element = {<Movies/>}/>
                <Route path = "/movies/:id" element = {<MovieDetails/>}/>
                <Route path = "/movies/:id/:date" element = {<SeatLayout/>}/>
                <Route path = "/my-bookings" element = {<MyBookings/>}/>
                <Route path = "/favorite" element = {<Favorite/>}/>
            </Routes>
        </>
    )
}
export default App
