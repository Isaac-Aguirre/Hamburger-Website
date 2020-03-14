'use strict'

const router = require('express').Router();

//Basic make destroy and update routes for the server

router.put('/burger/:id', (req,res) => {
    db.Burger.update({
      eaten: req.body
    }, {
        where: {
            id: req.params.id
        }
    }).then(dbBurger => {
        console.log("update sucessful")
        res.json(dbBurger);
    })
})

router.post('/burger', (req,res) => {
    db.Burger.create({
      name: req.body
    }).then(dbBurger => {
        console.log(dbBurger);
        res.json(dbBurger);
    })
})

router.delete("/burger/:id", (req, res) => {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbBurger => {
      res.json(dbBurger);
    });
  });

  router.get("/burger", (req, res) => {
    db.Burger.findAll({}).then(dbBurger => {
      res.json(dbBurger);
    });
  });

module.exports = router;