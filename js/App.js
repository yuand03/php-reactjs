import React, { Component } from 'react';
import {MemoryRouter as Router,Route,Link} from 'react-router-dom'
import Slider from 'react-slick'

import  { push as Menu } from 'react-burger-menu';
import logo from './logo.svg';
import './index.css';
import './App.css';

//import logo from './logo.svg';
////import './App.css';



class App extends Component {
    
    constructor(props) {
    super(props);
    //console.log();
    console.log('from app',props);
    
    
  }
   showSettings (event) {
    event.preventDefault();
    
  } 
  render() {
      var styles = {
          bmBurgerButton: {
            position: 'fixed',
            width: '100px',
            height: '100px',
            left: '0px',
            top: '0px'
          },
      
          bmBurgerBars: {
            //background: '#373a47',
            
                display:'none',
            //position:relative
        },
          
         
          
      };
      var style1= {
          position: 'fixed',
            width: '100px',
            height: '100px',
            left: '0px',
            top: '0px',
            color: 'white',
            
      };
      var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
    };
    var style2={
        padding:'0px 30px',
    }
    
  //const SlidingMenu = BurgerMenu['pushRotate'];
    return (
            
      <div className="App">
          
          <div id="outer-container" style={{height: '60%'}}>
       <Menu styles={styles} customCrossIcon={ <img src="img/cross.svg" /> }   id={'push'} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} isOpen={ false } width={ 280 }>
        <a id="home" className="menu-item" href="/php_react/">Home</a>
        <a id="about" className="menu-item" href="/php_react/about">About</a>
        <a id="contact" className="menu-item" href="contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        <hr/>
        
        <Link to='/php_react/home' >
                 {'home'}
               </Link>
               <Link to='/php_react/about'>
                 {'About'}
               </Link>
               <Link to='/php_react/user/john'>
                 {'john'}
               </Link>
               <Link to='/php_react/chs'>
                 {'chs'}
               </Link>
               <Link to='/php_react/address'>
                 {'address'}
               </Link>
      </Menu>
      <div style={style1}>open</div>
      <main id="page-wrap">
        <div className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React657</h2>
          
        </div>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={style2}>
        <Slider {...settings} >
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
      </div>
        
        </main>
        </div>
      </div>
    );
  }
}
global.App = App;
export default App;
