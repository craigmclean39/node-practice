const http = require('http');
const fs = require('fs');
// Create Server, callback executed when someone connects
http
  .createServer((req, res) => {
    let path = './404.html';
    switch (req.url) {
      case '/': {
        path = './index.html';
        break;
      }
      case '/about': {
        path = './about.html';
        break;
      }
      case '/contact-me': {
        path = './contact-me.html';
        break;
      }
      default: {
        break;
      }
    }

    fs.readFile(path, (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });

    /*     fs.readFile('./index.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(pn);
      return res.end();
    }); */
  })
  .listen(8080);
