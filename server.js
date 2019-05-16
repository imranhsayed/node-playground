const http = require('http');

// Formidable module parses the uploaded file once it reaches the server.
const formidable = require('formidable');
const fs = require('fs');

http.createServer(function ( req, res ) {
	if ( '/fileupload' === req.url ) {

		const form = new formidable.IncomingForm();

		// When a file is successfully uploaded to the server, it is placed on a temporary folder.
		form.parse( req, function ( err, fields, files ) {

			// This is where you put the root path of your project
			const rootDirPath = '/Users/imransayed/node-app/';

			const oldpath = files.filetoupload.path;
			const newpath = rootDirPath + files.filetoupload.name;

			// Use the fs module, to move the file to the current folder
			fs.rename( oldpath, newpath, function (err) {
				if (err) throw err;
				res.write('File uploaded and moved!');
				res.end();
			});
		});

	} else {
		// Writes an HTML form, with an upload field
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
		res.write('<input type="file" name="filetoupload"><br>');
		res.write('<input type="submit">');
		res.write('</form>');
		return res.end();
	}
}).listen(8080);
