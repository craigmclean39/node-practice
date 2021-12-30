/*const http = require('http');
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
    }); 
  })
  .listen(3000);*/

const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.get('/', (req, res) => {
  serveFile('./index.html', res);
});
app.get('/about', (req, res) => {
  serveFile('./about.html', res);
});
app.get('/contact-me', (req, res) => {
  serveFile('./contact-me.html', res);
});

app.get('*', (req, res) => {
  serveFile('./404.html', res);
});

app.listen(port, () => {
  console.log('listening');
});

const serveFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
};
