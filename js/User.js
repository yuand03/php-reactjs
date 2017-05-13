/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//import {BrowserRouter as Router,Route} from 'react-router-dom'

const User = ({ match ,location,history,data}) => {
    console.log('match:',match);
    console.log('location:',location);
    console.log('history:',history);
    console.log('data:',data);
    
  return <h1>Hello {match.params.username}!</h1>
}

export default User;