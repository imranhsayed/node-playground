const http = require('http');

// Require node's events module
const events = require( 'events' );

// Instantiate a new event object using events.EventEmitter()
const eventEmitter = new events.EventEmitter();

// Your custom event handler
const screamEventHandler = () => {
	console.warn( 'I hear scream..' );
};
// Your custom event handler
const beatEventHandler = () => {
	console.warn( 'I hear beat..' );
};

// Add an event , where your custom event scream is 'scream'
eventEmitter.on( 'scream', screamEventHandler );
// // Add an event , where your custom event beat is 'scream'
eventEmitter.on( 'beat', beatEventHandler );

// Trigger the event
eventEmitter.emit( 'scream' );
eventEmitter.emit( 'beat' );

http.createServer(function (req, res) {
	// add a HTTP header:
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(req.url);
	res.end();
}).listen(8080);
