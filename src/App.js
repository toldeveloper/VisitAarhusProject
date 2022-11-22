import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from "./pages/Home";
import MyCalendar from "./pages/calendar/Calendar"
import Save from './pages/calendar/Save';
import Categories from "./pages/Categories"
import SearchResult from "./pages/SearchResult"
import Favorite from "./pages/Favorite"

import PlacesToEat from "./pages/PlacesToEat"
import PlaceToEat from "./pages/PlaceToEat"
import Attractions from "./pages/Attractions"
import Attraction from "./pages/Attraction"
import Activities from "./pages/Activities"
import Activity from "./pages/Activity";
import Events from "./pages/Events"
import Event from "./pages/Event"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/discover" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/discover/:id" element={<SearchResult />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/calendar/:id" element={<Save />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/*" element={<Home />} />
          

          <Route path="/places-to-eat" element={<PlacesToEat />} />
            <Route path="/places-to-eat/:id" element={<PlaceToEat />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<Event />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/attractions/:id" element={<Attraction />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/:id" element={<Activity />} />
          
          
          
          
          
          
      </Routes>

      <Navbar />

    </div>
  );
}

export default App;
