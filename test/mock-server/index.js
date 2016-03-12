const express = require('express'),
  app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.get('/api/foo', (req, res) => {
  res.send({
    foo: 'bar'
  });
});

app.listen(9001);
