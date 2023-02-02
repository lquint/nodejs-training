const express = require('express');
const app = express();
const fileRoutes = require('./routes/file.route')
const centralRoutes= require('./routes/central.route')
var bodyParser = require('body-parser');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.json())
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',centralRoutes)
app.use('/fs',fileRoutes)

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});