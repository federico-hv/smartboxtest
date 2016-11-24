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
              <div className="container linksContainer">

                <div className="col-xs-10 col-xs-offset-1">
                  <div className="row">
                    <div className="col-xs-10 col-xs-offset-1 col-sm-offset-0 noPadding">
                      <span className="ourApps">Nuestras Apps</span>
                    </div>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 col-md-4 linkBox">
                        <img className="img-fluid center-block img-width" src={require('../assets/kunga.png')}/>
                        <div className="linkBoxTitle">
                          KUNGA . Actitud Animal
                        </div>
                    </div>
                    <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 col-md-4">
                      <img className="center-block img-circle img-circ-width" src={require('../assets/foto-middle.png')}/>
                    </div>
                    <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 col-md-4 linkBox">
                      <img className="img-reponsive center-block img-width" src={require('../assets/directtv.png')}/>
                        <div className="linkBoxTitle">
                          DirectTv. TV Interactive
                        </div>
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
