const express = require('express');
const path = require('path');
const reduxApp = express();

reduxApp.use(express.static(path.resolve('./dist/public')));

reduxApp.use('*', (req, res, next)=> {
  console.log(req.originalUrl, req.method);
  next();
})

reduxApp.get('/', (req, res) => {
  res.send('./index.html')
});

const port = 4300;
reduxApp.listen(port, () => {
  console.log('redux app listening on port ' + port)
})