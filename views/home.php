<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//var_dump(dirname(dirname(__FILE__)).'/class/customer.table.php');
require_once dirname(dirname(__FILE__)).'/class/customer.table.php';
$customer = new Customer();
//var_dump($customer);
 $temp =$customer->getAll();
//var_dump($temp);
$newtemp = array();
foreach ($temp as $item) {
    //var_dump($item);
    $newtemp[] = get_object_vars($item);
    
}

 $data =["data"=>$newtemp];
$t = json_encode($data);
include dirname(__FILE__).'/modules/header.php';
//echo './modules/header.php';
?>
 
    <div id="app"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start`.
      To create a production bundle, use `npm run build`.
    -->
   <?php
    include dirname(__FILE__).'/modules/footer.php';
   ?>
