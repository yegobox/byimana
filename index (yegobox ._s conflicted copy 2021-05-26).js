// This is the update on 5/25/2021
// current time 6:57

const bodyParser = require('body-parser');
let moment = require('moment');
let cookieParser = require('cookie-parser');
let auth = require('./middleware/auth');
let post = require('./routes/post');
let User_auth = require('./routes/auth');
let path = require('path');
let express = require('express');
const mongoose = require('mongoose');
const http = require('http');
let NotificationRouter = require('./routes/notifications');
let Links = require('./routes/links');
let deleteWorks = require('./routes/deleteLinks');
let mailer = require('./routes/mailer');
let cors = require('cors');
let app = express();
let port = 8000;
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');

const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
} = require('./utils/users');

const server = http.createServer(app);
const io = socketio(server);
const botName = 'B-Inter : ';

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/notifications', NotificationRouter);
app.use('/links', Links);
app.use('/posts', post);
app.use('/deleteWorks', auth, deleteWorks);
app.use('/contact', mailer);
app.use('/api/user', User_auth);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'build')));

mongoose.connect('mongodb+srv://Byimana:110197,vintage@cluster0.cwy7y.gcp.mongodb.net/byimanaweb?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => { console.log('database connection established successfully') })
app.get('/uploadAnnouncements', auth, (re, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notifications.html'));
});
app.get('/uploadWorks', auth, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'teachers.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'staff_login.html'));
});
app.get('/redirect', auth, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'redirect.html'));
});
app.get('/blog', (req, res) => {
    res.redirect('/');
});
app.get('*', (req, res) => {
    res.send("<h3 class=\"text-center\">Sorry, The page you're trying to reach is unavailable.</h3> <br> <a href=\"/\">Go to Home</a>")
})

// Run when client connects
io.on('connection', socket => {
    socket.on('joinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);

        // Welcome current user
        socket.emit('message', formatMessage(botName, 'Welcome to Byimana Interactive ( B-InteR ) Live discussions'));

        // Broadcast when a user connects
        socket.broadcast
            .to(user.room)
            .emit(
                'message',
                formatMessage(botName, `${user.username} Has joined the chat`)
            );

        // Send users and room info
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    });

    // Listen for chatMessage
    socket.on('chatMessage', msg => {
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message', formatMessage(user.username, msg));
    });

    // Runs when client disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);

        if (user) {
            io.to(user.room).emit(
                'message',
                formatMessage(botName, `${user.username} Has left the chat`)
            );

            // Send users and room info
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
            });
        }
    });
});

try {
    server.listen(port, () => {
        console.log('server is up and running');
    })
} catch (e) {
    console.log(e.message)
}
