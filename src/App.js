import './main.css';
//import './main.scss';
import React, { Component } from 'react';


export default class App extends Component {
  render() {
    return (
      <main>
          <section>
            <div className="one">
              <div className="brandOne">
                <img src={require('../assets/icon.png')} />
                <br/>
                <br/>
                <img src={require('../assets/NuncheeInteractive.png')} />
              </div>
            </div>
          </section>

          <section>
            <div className="two">
              <div className="container">
                <div className="col-sm-10 col-sm-offset-1">
                  <div className="row">
                    Nuestras apps
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-sm-4">
                      <img src={require('../assets/kunga.png')} style={{width:'90%'}}/>
                    </div>
                    <div className="col-sm-4">
                      <img src={require('../assets/foto-middle.png')} style={{marginLeft:'20%',width:'60%', borderRadius: '90px'}}/>
                    </div>
                    <div className="col-sm-4">
                      <img src={require('../assets/directtv.png')} style={{width:'90%'}}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="three"></div>
          </section>

          <footer>
            <div className="four">
              <img className="brandTwo" src={require('../assets/NuncheeInteractive_White.png')} />
            </div>
          </footer>
      </main>
    );
  }
}
