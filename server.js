const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient,ObjectID} = require('mongodb')

const path = require('path');
const app = express();
const port = process.env.PORT || 9000;
const url = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio';
let login = false;
console.log(url);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

MongoClient.connect(url,(err,db)=>{
    if(err)
        return console.log(`error in connecting mongodb ${err}`);
    console.log("connected to mongodb");
    dbs = db.db('kush');

    app.post('/saveContact',(req,res)=>{
        dbs.collection('contact').insertOne(req.body.params.data,(err,response)=>{
            console.log(req.body.params.data);
            console.log(response.ops)
            if(err)
                res.status(404).send("unable to insert " + err);
            res.send(response.ops);
        });
    })
    app.post('/contactDetails5',(req,res)=>{
        console.log(req.body);
        if(req.body.params.data.name ==="guglak2" && req.body.params.data.password === "Kush54321")
        {
            login = true;
            res.send("success");
        }
        else{
            res.send("error")
        }
    })

})

app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
})