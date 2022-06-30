const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { router } = require('./router.js');

app.use(express.static('public'));

app.use('/', router);

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
