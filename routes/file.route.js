const express = require('express');
const router = express.Router();
const fs = require('fs')
const { readdir } = require('fs/promises')
const path = require('path')
const { resolve } = require('path');
const fileController = require('../controllers/fileController')

router.get('/', (req,res)=>{
    res.render('pages/files');
});


router.get('/directories',fileController.getFiles )

router.post('/writeFile',fileController.writeFile)
router.delete('/deleteFile',fileController.deleteFile)

module.exports = router;