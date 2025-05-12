import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";
import AddPropertyPage from "./pages/AddPropertyPage";

// import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

export default function App(props) {
  return(
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/properties" element={<PropertiesPage />} />
      <Route path="/property-detail/:propertyId" element={<PropertyDetailsPage />} />
      <Route path="/add-property" element={<AddPropertyPage/>}/>
    </Routes>
  )
}