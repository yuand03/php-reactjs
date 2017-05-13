/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React, { Component } from 'react';
import { Match } from 'react-router'
import { BrowserRouter  as Router,Route,Link } from 'react-router-dom'
import  App from './App'
import  User from './User'
import  Address from './Address'

class Myrouter extends Component {
     constructor(props) {
    super(props);
    console.log(props);
    
  }
    render() {
      
            return (
                <div >
                    <Router>
                            <div>
                                
                                <Route path="/" component={(props)=><App {...props}  {...this.props}/>}/>
                                <Route path="/php_react/address" render={(props) => <Address {...this.props} {...props}/>}/> 
                                <Route path="/php_react/user/:username" render={props=><User data="test" {...props}/>} />
                                <Route path="/php_react/home" render={() => <div>Home</div>}/>
                                <Route path="/php_react/about" render={() => <div><h1>About</h1></div>}/>

                                <Route path='/php_react/chs' component={
                                ({ match }) =>  {
                                    console.log('from chs');
                                           console.log(this.props);
                                            return (<div className={match ? 'active' : ''}>
                                                <Link to='/php_react/any'>
                                                    {'any'}
                                                </Link>
                                            </div>);
                                           }
                                    }/>
                             <Route path='/php_react/home' children={
                                ({ match }) =>  {
                                    //console.log('from chs');
                                          console.log(this);
                                        
                                            return (<div className={match ? 'active' : ''}>
                                            {match ? '>' : ''}
                                                <Link to='/php_react/home'>
                                                    {'home'}
                                                </Link>
                                            </div>);
                                           }
                                    }/>
                            <Route path='/php_react/address' children={
                                ({ match }) =>  {
                                    //console.log('from chs');
                                          console.log(this);
                                        
                                            return (<div className={match ? 'active' : ''}>
                                            {match ? '>' : ''}
                                                <Link to='/php_react/address'>
                                                    {'address'}
                                                </Link>
                                            </div>);
                                           }
                                    }/>
                            </div>
                    </Router>
                </div>
            )
    }
}

global.Myrouter = Myrouter;
export default Myrouter;
