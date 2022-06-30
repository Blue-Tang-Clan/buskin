import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouterApp from './components/RouterApp.jsx';
import App from './components/App.jsx';
import ArtistProfileQR from './components/ArtistProfileQR.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<RouterApp />}>
        <Route path='' element={<App />} />
        <Route path='artist/:artistId' element={<ArtistProfileQR />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
