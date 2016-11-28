import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import Footer from './Footer';


const App = ()=>(
  <main>
    <section>
      <SectionOne />
    </section>
    <section>
      <SectionTwo />
    </section>
    <section>
        <SectionThree />
    </section>
    <footer>
        <Footer />
    </footer>
  </main>
);


export default App;
