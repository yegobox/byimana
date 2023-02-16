let path = require('path');
let moment = require('moment');
let multer = require('multer');
let fs = require('fs');
let express = require('express');
let router = express.Router();
let Posts = require('../models/Posts');
let bodyParser = require('body-parser');

router.use(bodyParser.json());
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + moment(Date.now()).format("DD/MM/YYYY"))
    }
});
let upload = multer({storage});

router.post('/uploadPost',upload.single('image'), (req, res) => {
    console.log(req.body)
    const {title, content, caption} = req.body;
    console.log(req.body.file);

    ;
    if(!title || !content || !caption){
        res.json({"Error": "Provide all options"});
    }else {
        let post = new Posts({
            title,
            content,
            image:{
                caption,
                img:{
                    data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                    contentType: 'image/png'
                }
            }
        });
        post.save();
    }
});
router.get('/', (req, res) => {
    Posts.find({}, (err, items) => {
        if(err){
            console.log(err);
            res.status(500).send('An error occured', err);
        }
        else{
            res.json(items)
        }
    });
});

module.exports = router;
