import express from 'express';
import path from 'path';
const sandboxApp = express();

sandboxApp.use(express.static(path.resolve('./dist/public')));

sandboxApp.use('*', (req, res, next) => {
  console.log(req.originalUrl, req.method);
  next();
})

sandboxApp.get('/', (req, res) => {
  res.send('./index.html')
});

const port = 4300;
sandboxApp.listen(port, () => {
  console.log('React sandbox listening on port ' + port)
})