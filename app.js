const express=require('express');
const app=express();

app.use((req, res, next)=>{
    res.end('page not found');
});
app.listen(3000, ()=>{
    console.log('Listening on 3000')
});