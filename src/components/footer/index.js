import React from 'react';
import About from './about';
import Products from './products';
import Links from './links';
import Contact from './contact';
import Copyright from './copyright';

function Footer() {
  return (
    <footer className="text-center lg:text-left bg-gray-100 text-gray-600 absolute inset-x-0 bottom-0 w-full">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <About />
          <Products />
          <Links />
          <Contact />
        </div>
      </div>
      <Copyright />
    </footer>
  );
}

export default Footer;
