const nodemailer = require('nodemailer');
let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
router.use(bodyParser.json())

router.post('/', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'habichristi@gmail.com',
            pass: "captainlevi123" // naturally, replace both with your real credentials or an application-specific password
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: 'byimanaweb@gmail.com',
        subject: req.body.subject,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/');
        }
    });
})

module.exports = router;