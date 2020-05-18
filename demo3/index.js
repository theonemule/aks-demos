const express = require('express')
const os = require('os')
const app = express()
const port = 80

var response = `<html><body><h1>`
response += `Hello from ` + os.hostname() + `</h1>` 
response += `Type: ` + os.type() + `<br/>` 
response += `Platform: ` + os.platform() + `<br/>` 
response += `Arch: ` + os.arch() + `<br/>` 
response += `Release: ` + os.release() + `<br/>` 
response += `</body></html>` 

app.get('/', (req, res) => res.send(response))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))