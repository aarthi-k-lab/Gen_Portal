var http = require('http');

http.createServer(function (req, res) {
    res.end(str)
  res.writeHead(200, {'Content-Type': 'text/html'});
  const testFolder = 'Suites';
  const fs = require('fs');
  let str="";
  fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        str+=file+"\n";        
    })
    
    res.end(str);;})
}).listen(8080);
