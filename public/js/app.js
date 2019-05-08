(() => {
    const form = document.querySelector('form');
    const socket = io();
    const input = document.getElementById('m');
    const output = document.getElementById('messages');
    let onlineUsers = [];
    const log = document.querySelector('.log');

// Chat section

    form.addEventListener('submit', function(e) {
        const username = localStorage.getItem('username');
        const query = [input.value, username];
        e.preventDefault();
        socket.emit('query', query);

        input.value = "";
    });

    // User connected/disconnected
    socket.on('user connect', (name)=>{

        while (log.firstChild) {
            log.removeChild(log.firstChild);
        }

        name.forEach((item) => {

            const list = document.createElement('li');
            list.innerText = item + ' is connected';
            log.appendChild(list);


        });

        console.log(name);
        console.log(onlineUsers);

    });

    socket.on("user disconnect",(user) => {

        console.log(user);

        while (log.firstChild) {
            log.removeChild(log.firstChild);
        }

        console.log('online users ' + onlineUsers);

        // for( let i = 0; i < onlineUsers.length; i++){
        //     if ( onlineUsers[i] === user) {
        //         onlineUsers.splice(i, 1);
        //     }
        // }

        console.log('online users2 ' + onlineUsers);


        user.forEach((item)=>{
            const list = document.createElement('li');

            list.innerText = item + ' is connected';
            log.appendChild(list);
        })

    });

    // Chat section
    socket.on("giphy init", async (obj) => {

        let newListItem = document.createElement('li');
        let username = document.createElement('h3');
        let message = document.createElement('p');

        username.innerText = obj[1];
        message.innerText = obj[0];


        document.querySelector("#messages").appendChild(newListItem);
        newListItem.appendChild(username);
        newListItem.appendChild(message);
        updateScroll();
    });

    const updateScroll = () => {
        document.body.scrollTop = document.body.scrollHeight;
    };

    // Store login in localStorage
    if(document.getElementById('login')) {
        localStorage.clear();
        const form = document.querySelector('form');
        const input = document.querySelector('.usernameInput');
        form.addEventListener('submit', () => {
            localStorage.setItem('username', input.value);
            // socket.emit('name', username);
        });
    }


// Code editor section
    const htmlInput = document.getElementById('html-input');
    const cssInput = document.getElementById('css-input');

    socket.on('AllHtml', (html) => {
        console.log(html);
        document.querySelector('iframe').contentWindow.document.body.innerHTML = html;
    });

    socket.on('AllCss', (css) => {
        console.log(css);
        document.querySelector('iframe').contentWindow.document.querySelector("style").innerText = css;
    });


    htmlInput.addEventListener('input', function() {
        const html = htmlInput.value;
        socket.emit('ClHtml', html);
        console.log('html sent!');
    });

    cssInput.addEventListener('input', () => {
        const css = cssInput.value;
        socket.emit('ClCss', css);
        console.log('css sent!');
    });


})();
