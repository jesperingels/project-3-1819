const express = require('express');
const compression = require('compression');
require('ejs');
const app = express();
const port = process.env.PORT || 3020;

app.use(compression());

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen(port, () => console.log(`App listening on port ${port}!`));