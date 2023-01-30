const http = require('node:http');
const fs = require('node:fs');
const express = require('express');
const app = express();
const {readFile} = require('node:fs/promises')
const fileRoutes = require('./routes/file.route')

app.use('/api',fileRoutes)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});