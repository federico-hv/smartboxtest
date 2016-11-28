import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';


const SectionThree = ()=>(
  <Parallax strength={300} bgStyle={{width: '100%'}}>
    <Background>
      <div className="three"></div>
    </Background>
    <div style={{height:'100vh'}}></div>
  </Parallax>
);


export default SectionThree;
