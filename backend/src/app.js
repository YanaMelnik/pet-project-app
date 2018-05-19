var express = require('express');
var app = express();

app.get('/api/author', (req, res) => {
  res.json({
    name: 'Yana'
  });
});

app.listen(9000, () => console.log('Express started on 9000 port'));

