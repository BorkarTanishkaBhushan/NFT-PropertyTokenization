import Image from "next/image";
import React from 'react';
import Header from './header.jsx';
import Hero from './hero';
import About from './about';
import Service from './service';
import Property from './property';
import Contact from './contact';
import Newsletter from './newsletter';
import Footer from './footer';
import Login from "./login.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Login/>
      {/* <Property /> */}
      {/* <Contact /> */}
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}
