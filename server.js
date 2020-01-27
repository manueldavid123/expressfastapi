const express = require('express');
const server = express();
let data = require('./data');

const body_parser = require('body-parser');

const port = 4000;

// parse JSON (application/json content-type)
server.use(body_parser.json());
server.engine('html', require('ejs').renderFile);
server.set('view engine', 'ejs');
server.set('views', __dirname);

server.get("/", (req, res) => {
   res.render(__dirname + '/index.html', {data: data});
});

server.get("/temperature", (req, res) => {
   res.json(data);
});

server.post("/temperature", (req, res) => {
   const item = req.body;
   console.log('Adding new item: ', item);

   // add new item to array
   data.push(item)

   // return updated list
   res.json(data);
});


server.listen(port, () => {
   console.log(`Server listening at ${port}`);
});