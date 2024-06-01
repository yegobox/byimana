let express = require('express');
let router = express.Router();
let Links = require('../models/Links');
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
router.use(bodyParser.json());
router.post('/',async(req, res)=>{
    let title = req.body.title;
    let link = req.body.link;
    let date = req.body.date;
    let facilitator = req.body.facilitator;
    if(!title && !date && !facilitator){
        let work = await Links.findOne({link});
        if(work){
            await Links.deleteOne({link})
            .then(() => res.json({"response":"Deleted"}))
            .catch(err => res.json({"response":"Error occured"}))
        }else{
            res.send("<div><h1>No such work exists</h1></div>")
        }
        
    }
    if(title && date && facilitator){
        let work = await Links.findOne({title, facilitator, date});
        if(work){
            await Links.deleteOne({title, date, facilitator})
            .then(() => res.json({"response":"Deleted"}))
            .catch(err => res.json({"response":"Error occured"}))
        }else{
            res.send("<div><h1>No such work exists</h1></div>")
        }
        
    }
})

module.exports = router;