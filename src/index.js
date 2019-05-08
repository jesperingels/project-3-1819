const express = require('express');
require('ejs');
const app = express();
const rp = require('request-promise');
const http = require('http').Server(app);
const request = require('request');
const io = require('socket.io')(http);
const randomInt = require('random-int');
const port = process.env.PORT || 3020;
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
    res.render('pages/login.ejs');
});

let onlineUsers = [];

app.post('/', function(req, res) {

    console.log('form sent');

    io.on('connection', socket => {
        let thisUser = req.body.user;
        console.log('a user connected');

        if(onlineUsers.includes(thisUser)) {
            console.log('user exists')
        } else {
            onlineUsers.push(thisUser);
        }
        console.log('online users= ' + onlineUsers);
        io.emit("user connect", onlineUsers);


        socket.on("disconnect",() => {
            console.log(thisUser + " disconnected");

            for( let i = 0; i < onlineUsers.length; i++){
                if ( onlineUsers[i] === thisUser) {
                    onlineUsers.splice(i, 1);
                }
            }

            io.emit("user disconnect", onlineUsers);
        });
    });

    res.render('pages/index.ejs');
});

io.on('connection', socket => {

    socket.on('query', (msg) => {
        const chatMsg = msg[0];
        const username = msg[1];

        // API call with headers
        // rp(options(chatMsg))
        //     .then(res => callback(res))
        //     .catch(function (err) {
        //         console.log(err);
        //     });

        const data = [chatMsg, username];

        io.emit('giphy init', data)


    });

    socket.on('ClHtml', (html) => {
        console.log(html);
        io.emit('AllHtml', html);
    });
    socket.on('ClCss', (css) => {
        console.log(css);
        io.emit('AllCss', css)
    });
});

http.listen(port, () => console.log('App listening on port: ' + port ));
