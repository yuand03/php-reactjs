<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
?>
<script src="node_modules/jquery/dist/jquery.js"></script>
    <script src="node_modules/react/dist/react.js"></script>
    <script src="node_modules/react-dom/dist/react-dom.js"></script>
    <script src="bundle.js"></script>
    <script>
    ReactDOM.render(
    	React.createElement(Myrouter,<?= $t; ?>), document.getElementById('app')
	);
    </script>
  </body>
</html>
