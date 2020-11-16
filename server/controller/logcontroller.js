const express = require('express');
const router = express.Router();
const validateSession = require('../middleware/validate-session');
const Log = require('../db').import('../models/log')

router.get('/practice', validateSession,function (req, res) {
    res.send('Hey!! This is a practice route')
})

router.post('/create',validateSession, (req, res) => {
    const logEntry = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        results: req.body.log.results,
        owner: req.user.id
    }
    Log.create(logEntry)
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({ error: err }))
})

router.get("/", (req, res)=>{
    Log.findAll()
        .then(logs => res.status(200).json(logs))
        .catch(err => res.status(500).json({ error: err }))
})

router.get('/mine',validateSession,(req,res) => {
    let userid = req.user.id
    Log.findAll({
        where: {owner:userid}
    })
    .then(logs => res.status(200).json(logs))
    .catch(err => res.status(500).json({error: err}))
})

module.exports = router