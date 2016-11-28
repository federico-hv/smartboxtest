import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';


const SectionOne = ()=>(
  <Parallax strength={300} bgStyle={{width: '80%'}}>
    <Background>
      <div className="one">

          <div className="brandOne">
            <img src={require('../../assets/icon.png')} />
            <br/>
            <br/>
            <img src={require('../../assets/NuncheeInteractive.png')} />
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
    </Background>
    <div style={{height:'100vh'}}></div>
  </Parallax>
);


export default SectionOne;
