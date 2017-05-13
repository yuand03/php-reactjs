<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$router = new AltoRouter();
//var_dump(dirname(dirname(__FILE__)).'/views/home.php');
$router->setBasePath('/php_react');
$router->map('GET','/' ,function(){
    include_once './views/home.php';
});
$router->map('GET','/[a:subpage][/?]', function($subpage){
   
    if(file_exists('./views/'.$subpage.'.php')){
            
    include('./views/'.$subpage.'.php');
    }
    else{
        //echo 'no fond';
    header('Location: /php_react');
   
    }
});
$router->map( 'GET', '/user/[i:id]', function($id) {
   
    //echo $id;
            
    include_once ('./views/user.php');
},'john2');

$match = $router->match();
//var_dump($match);
// call closure or throw 404 status
if( $match && is_callable( $match['target'] ) ) {
    //echo 'called';
	call_user_func_array( $match['target'], $match['params'] ); 
} else {
	// no route was matched
	header('Location: /php_react/');
}

/**
$dispatcher = FastRoute\simpleDispatcher(function(FastRoute\RouteCollector $r) {
    $r->addRoute('GET', '/php_react[/]', function () {
        include './views/home.php';
    });
    // {id} must be a number (\d+)
    $r->addRoute('GET', '/php_react/users/{id:\d+}[/]', function () {
        echo '<h3>users/id</h3>';
       
exit;

    });
    // The /{title} suffix is optional
    $r->addRoute('GET', '/php_react/articles/{id:\d+}[/{title}]', function () {
        echo 'Hello World';
    });
});
//var_dump($dispatcher);
// Fetch method and URI from somewhere
$httpMethod = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

// Strip query string (?foo=bar) and decode URI
if (false !== $pos = strpos($uri, '?')) {
    $uri = substr($uri, 0, $pos);
}
$uri = rawurldecode($uri);
//echo $uri;
$routeInfo = $dispatcher->dispatch($httpMethod, $uri);
switch ($routeInfo[0]) {
    case FastRoute\Dispatcher::NOT_FOUND:
        // ... 404 Not Found
        //echo $routeInfo[0];
         header('Location: /php_react/');
        break;
    case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
        $allowedMethods = $routeInfo[1];
        // ... 405 Method Not Allowed
        break;
    case FastRoute\Dispatcher::FOUND:
        //echo "found";
        $handler = $routeInfo[1];
        $vars = $routeInfo[2];
        //var_dump($vars);
        // ... call $handler with $vars
        call_user_func($handler, $vars);
        break;
}
 */
 