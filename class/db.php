<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

use Illuminate\Database\Capsule\Manager as Capsule;
class DB{
    var $capsule ;
    
    function __construct(){
        //echo("run fro db:");
        $this->capsule = new Capsule();
        //echo(dirname(__FILE__).'/db.db');
        $this->capsule->addConnection([
        'driver'    => 'sqlite',
        'database'  => dirname(__FILE__)."/db.db",
        'prefix'    => '',
        ], 'default');
        // echo("run fro db:");
         $this->capsule->setAsGlobal();
    }
    
    
    

    

}