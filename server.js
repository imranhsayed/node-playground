const express = require( 'express' );

const app = express();

app.get( '/', ( req, res ) => {
	debugger;
	console.warn( req.id );
} );

app.listen( 5000, () => console.warn( 'server started' ) );
