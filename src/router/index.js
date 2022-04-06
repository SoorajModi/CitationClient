import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  About, APA, Chicago, Docs, Help, Home, Login, MLA, NotFound, Donate, Settings, SignUp,
} from '../pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chicago" element={<Chicago />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/mla" element={<MLA />} />
        <Route path="/apa" element={<APA />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
