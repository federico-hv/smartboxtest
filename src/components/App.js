import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import Footer from './Footer';

/* Kept App Component as a class to avoid problems with react-hot-loader */
export default class App extends Component {
  render(){
    return(
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
  }
}
