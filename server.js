const path = require('path');
const express = require( 'express' );

// Application instance
const app = express();

/**
 * Create a get request
 * The call back function will run each time our application receives a get request on 'localhost:8080/' root url
 */
app.get( '/', function ( req, res ) {
	// Sending the html file using res.sendFile
	res.sendFile('index.html', {
		root: path.join(__dirname, './')
	})
} );

/**
 * Binds your application on port 8080,
 * The call back function is executed when your application is ready to receive request
 */
app.listen( 8080, () => console.warn( 'Listening on Port 8080' ) );
