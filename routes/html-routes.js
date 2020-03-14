'use strict'
const db = require('../models')
const router = require('express').Router();


router.get('/', (req,res) => {
    if(db.Burgers){
        const burgers = db.Burgers.datavalues
        res.render(index, {
            burgers: burgers
        });
    }
    else{
        res.render('index');
    }
})

module.exports = router;