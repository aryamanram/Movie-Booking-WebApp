// Packages
import React from 'react'
import Navbar from "./components/Navbar.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

// Pages
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import SeatLayout from "./pages/SeatLayout.jsx";
import MyBookings from "./pages/MyBookings.jsx";
import Favorite from "./pages/Favorite.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {

    const isAdminRoute = useLocation().pathname.startsWith('/admin');

    return (
        <>
            <Toaster/>
            {!isAdminRoute && <Navbar/>}
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/movies" element = {<Movies/>}/>
                <Route path = "/movies/:id" element = {<MovieDetails/>}/>
                <Route path = "/movies/:id/:date" element = {<SeatLayout/>}/>
                <Route path = "/my-bookings" element = {<MyBookings/>}/>
                <Route path = "/favorite" element = {<Favorite/>}/>
            </Routes>
            {!isAdminRoute && <Footer/>}
        </>
    )
}
export default App
