const express=require('express');
const path=require('path');
const res = require('express/lib/response');
const app=express();

// app.use((req, res, next)=>{
//     res.end('page not found');
//     next();
// });

app.use(
    "/css",
    express.static(path.join(__dirname, 'public', 'css', 'bootstrap-4.0.0'))
  );

  app.use(
    "/img",
    express.static(path.join(__dirname, 'public', 'img'))
  );

app.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
    
});


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    });

app.listen(3000, ()=>{
    console.log('Listening on 3000')
});