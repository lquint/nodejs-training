const express = require('express');
const app = express();
const fileRoutes = require('./routes/file.route')
const centralRoutes= require('./routes/central.route')

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/',centralRoutes)
app.use('/fs',fileRoutes)

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});