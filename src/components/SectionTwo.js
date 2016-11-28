import React, { Component } from 'react';


export default class SectionTwo extends Component {

  constructor(props){
    super(props);
    this.state = {
      showLightBox: false,
      form: 0
    };
  }

  showLightBox(val){
    this.setState({
      showLightBox: !this.state.showLightBox,
      form: val
    });

    const { fadebox, overboxOne, overboxTwo, overboxThree } = this.refs;

    setTimeout(()=>{
        fadebox.classList.add('fbVisible');
        if(val === 1) {
          overboxOne.classList.add('obVisible');
          return;
        }
        else if(val === 2){
          overboxTwo.classList.add('obVisible');
          return;
        }
        overboxThree.classList.add('obVisible');
    }, 100);

  }

  hideLightBox(){

    const {
      fadebox,
      overboxOne,
      overboxTwo,
      overboxThree
    } = this.refs;

    fadebox.classList.remove('fbVisible');
    overboxOne.classList.remove('obVisible');
    overboxTwo.classList.remove('obVisible');
    overboxThree.classList.remove('obVisible');

    setTimeout(()=>{
      this.setState({
        showLightBox: !this.state.showLightBox,
        form: 0
      });
    }, 500);

  }

  render(){

    const {
      showLightBox,
      form
    } = this.state;

    return(
      <div>
        <div>
          <div ref="overboxOne" className="overbox" style={form === 1 ? { display: 'block'} : null}>
            <img className="img-fluid center-block img-width" src={require('../../assets/kunga1.png')} style={{height: '100%'}}/>
            <div className="col-xs-12">
              <div className="form-group form">
                <input ref="username" type="text" className="form-control" placeholder="Username"/>
                <input ref="password" type="password" className="form-control" placeholder="Password" />
                <button className="btn btn-sm btn-primary btn-block">Enviar</button>
              </div>
            </div>
          </div>
          <div ref="overboxTwo" className="overbox" style={form === 2 ? { display: 'block'} : null}>
            <img className="img-fluid center-block img-width" src={require('../../assets/foto-middle.png')} style={{height: '100%'}}/>
            <div className="col-xs-12">
              <div className="form-group form">
                <input ref="username" type="text" className="form-control" placeholder="Username"/>
                <input ref="password" type="password" className="form-control" placeholder="Password" />
                <button className="btn btn-sm btn-primary btn-block">Enviar</button>
              </div>
            </div>
          </div>
          <div ref="overboxThree" className="overbox obThree" style={form === 3 ? { display: 'block'} : null}>
            <img className="img-fluid center-block img-width" src={require('../../assets/directtv1.png')} style={{height: '100%'}}/>
            <div className="col-xs-12 formTwo">
              <div className="form-group form">
                <input ref="username" type="text" className="form-control" placeholder="Username"/>
                <input ref="password" type="password" className="form-control" placeholder="Password" />
                <button className="btn btn-sm btn-primary btn-block">Enviar</button>
              </div>
            </div>
          </div>
          <div ref="fadebox" onClick={this.hideLightBox.bind(this)} className="fadebox" style={showLightBox ? { display: 'block'} : null}></div>
        </div>

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
                  <div onClick={this.showLightBox.bind(this, 1)} className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 col-md-4 linkBox noPadding">
                      <img className="img-fluid rounded img-rounded center-block img-width" src={require('../../assets/kunga.png')}/>
                      <div className="linkBoxTitle">
                        KUNGA . Actitud Animal
                      </div>
                  </div>
                  <div onClick={this.showLightBox.bind(this, 2)} className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 col-md-4 linkBox">
                    <img className="center-block img-circle img-circ-width" src={require('../../assets/foto-middle.png')}/>
                  </div>
                  <div onClick={this.showLightBox.bind(this, 3)} className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 col-md-4 linkBox noPadding">
                    <img className="img-reponsive img-rounded center-block img-width" src={require('../../assets/directtv.png')}/>
                      <div className="linkBoxTitle">
                        DirectTv. TV Interactive
                      </div>
                  </div>
                </div>
              </div>

            </div>

        </div>
      </div>
    );
  }
}
