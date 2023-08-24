const http = require("http");
const fs = require('fs').promises;
const host = '192.168.1.101';
const localhost = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};


const server = http.createServer(requestListener);
server.listen(port, localhost, () => {
    console.log(`Server is running on http://${localhost}:${port}`);
});




