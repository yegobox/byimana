let express = require('express')
let Notifications = require('../models/Notifications');
let router = express.Router();
let bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
router.use(bodyParser.json())


router.get('/', async(req, res) => {
    let notification = await Notifications.find();
    res.json(notification);
});

router.post('/uploadnotification', (req, res) => {
    let Notif = new Notifications({
        title: req.body.title,
        description: req.body.body,
        date: req.body.time
    })
    Notif.save()
    res.send('announcement added')
})

module.exports = router;