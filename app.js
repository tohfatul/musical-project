const express=require('express');
const path=require('path');
//const cors=require('cors');
const User = require('./models/user');
const musicRouter = require('./routes/musicRoute');
const myMusicRouter = require('./routes/myMusicRoute');

const res = require('express/lib/response');
const { json } = require('express/lib/response');

const app=express();

//app.use(cors());
app.use(express.json()); //to accept data in json format
app.use(express.urlencoded({ extended: true })); //decoding data send from html form


app.use(
    "/css",
    express.static(path.join(__dirname, 'public', 'css', 'bootstrap-4.0.0'))
  );

  app.use(
    "/img",
    express.static(path.join(__dirname, 'public', 'img'))
  );

  app.use(
    "/fontawesome",
    express.static(path.join(__dirname, 'public', 'fontawesome', 'fontawesome-free-6.1.1-web'))
  );
  app.use(
    "/songs",
    express.static(path.join(__dirname, 'public', 'songs'))
  );

app.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    
});

app.use('/musics', musicRouter);
app.use('/myMusics', myMusicRouter);

app.get('/users', (req, res, next)=>{
    res.send(User.getUsers());
    
});


app.post('/login', (req, res)=>{
    console.log(req.body);
    let users = User.getUsers();
    let obj = req.body;
    //let indx = users.findIndex(u=>u.username===req.body.username);
    const index = users.findIndex((u) => u.username === obj.username && u.password===obj.password);
    if(index>=0){
        res.send({username: obj.username});
    }else{
        res.send({username:'not ok'});
    }
    //res.send({index});
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    });

app.listen(3000, ()=>{
    console.log('Listening on 3000')
});