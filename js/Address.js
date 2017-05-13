/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React, { Component } from 'react';
import  { Table } from 'Reactable';
class Address extends Component {
    
    constructor(props) {
    super(props);
    //console.log();
    console.log('from address',props);
    
}
 render() {
     return (
        <div>
        <h1> {'address'}</h1> 
            <Table className="table" data={this.props.data} sortable={true} />
            </div>
            );
  }
 }

  
  export default Address;