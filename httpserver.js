const { readFile } = require('fs/promises');
const http = require('http');
const fs = require('fs');

const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    if(req.ur == '/'){
        
            res.sendFile("./index.html", { root: __dirname });
         
    }
});





server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
