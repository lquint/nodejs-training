const express = require('express');
const router = express.Router();
const fs = require('fs')
const { readdir } = require('fs/promises')
const path = require('path')
const { resolve } = require('path');

router.get('/', (req,res)=>{
    res.render('pages/files');
});
const fileController = require('../controllers/fileController')

router.get('/directories',fileController.getFiles )

module.exports = router;