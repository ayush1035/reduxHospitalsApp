const express = require('express');
const webpack = require('webpack');
const path=require('path');
const fs = require('fs');
const bp = require('body-parser');
const opn=require('opn');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const cors = require('cors');
const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors());
if(process.env.NODE_ENV==='production'){
    config = require('./webpack.config.prod')
} else{
    config = require('./webpack.config')
}
const compiler = webpack(config);

app.use(webpackHotMiddleware(compiler));
var middlewareDev = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
});

app.use(middlewareDev);

app.get('/getData', function (req, res) {
  fs.readFile('serverData/data.json', 'utf-8', function (err, data) {
    res.send(JSON.parse(data));
  });
});

app.post('/postData', function (req, res) {
  let fileData;
  fs.readFile('serverData/data.json', 'utf-8', function (err, data) {
    fileData = JSON.parse(data);
    let editData = req.body;
    let id = fileData.findIndex((el) => el.id == editData.id);
    fileData[id] = editData;
    fs.writeFile('serverData/data.json', JSON.stringify(fileData), function (err) {
      if (err)
        return console.log(err);
      res.send(fileData);

    })
  })
})
app.get("*", function(req, res){
    res.write(middlewareDev.fileSystem.readFileSync(path.join(__dirname, "/dist/index.html")));
    res.end();
} )


app.listen(3000, function () {
  opn("http://localhost:3000")
  console.log('Example app listening on port 3000!\n');
});