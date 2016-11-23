import './main.css';
//import './main.scss';
import React, { Component } from 'react';


export default class App extends Component {
  render() {
    return (
      <main>
          <section>
            <div className="one"></div>
          </section>

          <section>
            <div className="two"></div>
          </section>

          <section>
            <div className="three"></div>
          </section>

          <footer>
            <div className="four"></div>
          </footer>
      </main>
    );
  }
}
