const http = require("http");

const {readFileSync} = require("fs");

const data = readFileSync('./index.html', "utf-8");

http.createServer((req, res) => {

    // console.log(req.method);
    // console.log(req.url);

    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(data);
        res.end();
    } else if (req.url === '/about'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write(`AboutPage`);
        res.end();
    } else {
        res.writeHead(404, {'content-type': 'text/plain'});
        res.write("Page not found");
        res.end();
    }
}).listen(8000);