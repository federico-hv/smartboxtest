import './main.css';
import React, { Component } from 'react';


export default class App extends Component {

  constructor(props){
    super(props);
    this.toggleLightBox = this.toggleLightBox.bind(this);
    this.state = {
      showLightBox: false,
      form: 0
    };
  }

  toggleLightBox(val){
    this.setState({
      showLightBox: !this.state.showLightBox,
      form: val
    });

    const { fadebox, overboxOne, overboxTwo } = this.refs;

    setTimeout(()=>{
      if(this.state.showLightBox){
        fadebox.classList.add('fbVisible');
      }else{
        fadebox.classList.remove('fbVisible');
      }
    }, 100);

  }

  render() {

    const {
      showLightBox,
      form
    } = this.state;

    return (
      <main>



          <div ref="overboxOne" className="overbox" style={form === 1 ? { display: 'block'} : {display:'none'}}>
            <img className="img-fluid center-block img-width" src={require('../assets/kunga1.png')} style={{height: '100%'}}/>
            <div className="col-xs-12">
              <div className="form-group form">
                <input ref="username" type="text" className="form-control" placeholder="Username"/>
                <input ref="password" type="password" className="form-control" placeholder="Password" />
                <button className="btn btn-sm btn-primary btn-block">Enviar</button>
              </div>
            </div>
          </div>
          <div ref="overboxOne" className="overbox obTwo" style={form === 2 ? { display: 'block'} : null}>
            <img className="img-fluid center-block img-width" src={require('../assets/directtv1.png')} style={{height: '100%'}}/>
          </div>
          <div ref="fadebox" onClick={this.toggleLightBox.bind(this, 0)} className="fadebox" style={showLightBox ? { display: 'block'} : null}></div>

          <section>
            <div className="one">
              <div className="brandOne">
                <img src={require('../assets/icon.png')} />
                <br/>
                <br/>
                <img src={require('../assets/NuncheeInteractive.png')} />
                <br/>
                <br/>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a lorem nec odio porta ornare.
                  Donec fringilla turpis porta cursus feugiat. Duis vel malesuada turpis. Sed tristique neque magna,
                  non molestie enim placerat nec. Aliquam eu enim in mauris vulputate rutrum ut in nisl. Proin metus
                  nulla, suscipit vel nisi non, volutpat blandit tortor.
                </p>
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
                    <div onClick={this.toggleLightBox.bind(this, 1)} className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 col-md-4 linkBox">
                        <img className="img-fluid rounded img-rounded center-block img-width" src={require('../assets/kunga.png')}/>
                        <div className="linkBoxTitle">
                          KUNGA . Actitud Animal
                        </div>
                    </div>
                    <div className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 col-md-4">
                      <img className="center-block img-circle img-circ-width" src={require('../assets/foto-middle.png')}/>
                    </div>
                    <div onClick={this.toggleLightBox.bind(this, 2)} className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 col-md-4 linkBox">
                      <img className="img-reponsive img-rounded center-block img-width" src={require('../assets/directtv.png')}/>
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
