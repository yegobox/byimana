let express = require('express');
let Links = require('../models/Links');
let path = require('path');
let router = express.Router();
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
router.use(bodyParser.json());

router.get('/', async(req, res) => {
    let links = await Links.find();
    res.send(links)
});
router.post('/uploadlinks', async(req, res) => {
    let class_name = req.body.class;
    let link = req.body.link;
    let Link_check = await Links.findOne({class: class_name, link});
    if(Link_check){
        res.send("<div><h1>Work with the same data already exists</h1></div>")
    }else{
        let Link = new Links({
            title: req.body.title,
            facilitator: req.body.facilitator,
            date: req.body.date,
            class: req.body.class,
            link: req.body.link
        })
        Link.save()
        res.send(`<div><h1>Work added</h1></div>`)  
    }
   
})

module.exports = router;