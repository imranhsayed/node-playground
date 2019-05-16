function printHelp(  ) {
	console.warn( "Help description" );
	console.warn( "" );
	console.warn( "usage" );
	console.warn( "--help      print this help" );
	console.warn( "--name say hello to {NAME}" );
	console.warn( "" );
}

const args = require( 'minimist' )(process.argv.slice(2), { string: "name" });


if ( args.help || ! args.name ) {
	printHelp();
	process.exit(1);
}

const name = args.name;

console.log( "Hello " + name );

// Now if you don't pass params in command `node server.js --name=  ` you will get error
