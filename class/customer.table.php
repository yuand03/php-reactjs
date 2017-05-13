<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
require_once 'db.php';
class Customer{
    public $db;
    public function __construct(){
        
	$this->db= new DB();
        
        //echo "run from customer";
    }
     public function getAll(){
         //var_dump($this->db->capsule->table('customer')->get());
         return $this->db->capsule->table('customer')->get();
     }
}
