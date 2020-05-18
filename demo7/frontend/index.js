const express = require('express')
const os = require('os')
const app = express()
const port = 80

const http = require('http')


app.get('/', function(req, res){
	
	http.get('http://backend:3000', (backendResp) => {
	  let data = '';

	  backendResp.on('data', (chunk) => {
		data += chunk;
	  });

	  backendResp.on('end', () => {
		res.send(data);
	  });

	}).on("error", (err) => {
	  console.log("Error: " + err.message);
	});
	
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))