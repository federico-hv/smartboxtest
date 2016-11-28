import React, { Component } from 'react';
import axios from 'axios';


export default class SectionTwo extends Component {

  constructor(props){
    super(props);
    this.state = {
      overbox  : 0,
      response : {
        status : null,
        message: null
      }
    };
  }

  toggleLightBox(ind, key){
    const refs = this.refs;

    if(ind !== 0){
      this.setState({
        overbox: ind
      });
      setTimeout(()=>{
        refs['fadebox'].classList.add('fbVisible');
        refs[key].classList.add('obVisible');
      }, 100);
      return;
    }

    refs['fadebox'].classList.remove('fbVisible');
    Object.keys(refs).forEach(key=>{
      refs[key].classList.remove('obVisible');
    });

    setTimeout(()=>{
      this.setState({
        overbox: 0
      });
    }, 500);
  }

  toggleModal(show){
    const { messageModal } = this.refs;
    if(show){
      messageModal.classList.add('show');
      setTimeout(()=>{messageModal.classList.add('obVisible')},100);
      return;
    }
    messageModal.classList.remove('obVisible');
    this.refs['fadebox'].classList.remove('fbVisible');
    setTimeout(()=>{
      messageModal.classList.remove('show')
      this.setState({ overbox: 0 });
    },800);

  }

  getHttpMessage(status){
    switch(status){
      case 200:
        return 'Inicio de sesión correcto.';
      case 403:
        return 'No autorizado.';
      case 404:
        return 'Problemas al realizar el inicio de sesión';
      case 501:
        return 'Problemas internos del servidor.';
      case 502:
        return 'Colapso del servidor';
      case 503:
        return 'Bad request';
      default:
        return 'PUTA MADRE';
    }
  }

  sendData(val){
    this.setState({ overbox: 4 });
    const user = this.refs[`username${val}`].value;
    const pass = this.refs[`password${val}`].value;
    const url = 'http://test-web.nunchee.com/nunchee/api/1.0/users/login_frontend';
    const params = new URLSearchParams();
    params.append('username', user);
    params.append('password', pass);

    axios.post(url, params)
      .then((res)=>{
        console.log('RES: ', res);
        if(res.status !== 200) throw new Error(res);

        this.setState({
          response: {
            status: res.status+' '+res.data.status,
            message: this.getHttpMessage(res.status)
          }
        });
        this.setState({ overbox: 5 });
        this.toggleModal(true);
      })
      .catch((err)=>{
        const errMessage = this.getHttpMessage(err.response.status);
        err = err.response;
        this.setState({
          response: {
            status : err.status,
            message: errMessage
          }
        });
        this.setState({ overbox: 5 });
        this.toggleModal(true);
      });
  }

  render(){

    const {
      overbox,
      response
    } = this.state;

    return(
      <div>
        <div>
          <div ref="overboxOne" className="overbox" style={overbox === 1 ? { display: 'block'} : null}>
            <img className="img-fluid center-block img-width" src={require('../../assets/kunga1.png')} style={{height: '100%'}}/>
            <div className="col-xs-12">
              <div className="form-group form">
                <input ref="username1" type="text" className="form-control" placeholder="Username"/>
                <input ref="password1" type="password" className="form-control" placeholder="Password" />
                <button className="btn btn-sm btn-primary btn-block" onClick={this.sendData.bind(this, 1)}>Enviar</button>
              </div>
            </div>
          </div>
          <div ref="overboxTwo" className="overbox" style={overbox === 2 ? { display: 'block'} : null}>
            <img className="img-fluid center-block img-width" src={require('../../assets/foto-middle.png')} style={{height: '100%'}}/>
            <div className="col-xs-12">
              <div className="form-group form">
                <input ref="username2" type="text" className="form-control" placeholder="Username"/>
                <input ref="password2" type="password" className="form-control" placeholder="Password" />
                <button className="btn btn-sm btn-primary btn-block" onClick={this.sendData.bind(this, 2)}>Enviar</button>
              </div>
            </div>
          </div>
          <div ref="overboxThree" className="overbox obThree" style={overbox === 3 ? { display: 'block'} : null}>
            <img className="img-fluid center-block img-width" src={require('../../assets/directtv1.png')} style={{height: '100%'}}/>
            <div className="col-xs-12 formTwo">
              <div className="form-group form">
                <input ref="username3" type="text" className="form-control" placeholder="Username"/>
                <input ref="password3" type="password" className="form-control" placeholder="Password" />
                <button className="btn btn-sm btn-primary btn-block" onClick={this.sendData.bind(this, 3)}>Enviar</button>
              </div>
            </div>
          </div>

          <div ref="overboxFour" className="overbox loader obVisible" style={overbox === 4 ? { display: 'block'} : null}>
            <img className="img-fluid center-block img-width" src={require('../../assets/ellipsis.svg')} style={{height: '100%'}}/>
          </div>

          {/* Modal */}
          <div ref="messageModal" className="modal" role="dialog" style={overbox === 5 ? { display: 'block'} : null}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title">Status: {response.status}</h4>
                </div>
                <div className="modal-body">
                  <p>Message: {response.message}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={this.toggleModal.bind(this, false)}>Ok</button>
                </div>
              </div>
            </div>
          </div>


          <div ref="fadebox" onClick={this.toggleLightBox.bind(this, 0)} className="fadebox" style={overbox !== 0 ? { display: 'block'} : null}></div>
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
                  <div onClick={this.toggleLightBox.bind(this, 1, 'overboxOne')} className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 col-md-4 linkBox noPadding">
                      <img className="img-fluid rounded img-rounded center-block img-width" src={require('../../assets/kunga.png')}/>
                      <div className="linkBoxTitle">
                        KUNGA . Actitud Animal
                      </div>
                  </div>
                  <div onClick={this.toggleLightBox.bind(this, 2, 'overboxTwo')} className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 col-md-4 linkBox">
                    <img className="center-block img-circle img-circ-width" src={require('../../assets/foto-middle.png')}/>
                  </div>
                  <div onClick={this.toggleLightBox.bind(this, 3, 'overboxThree')} className="col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 col-md-4 linkBox noPadding">
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
