const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient,ObjectID} = require('mongodb')

const path = require('path');
const app = express();
const port = process.env.PORT || 9000;
const url = process.env.MONGO_URI;


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

MongoClient.connect(url,(err,db)=>{
    if(err)
        return console.log(`error in connecting mongodb ${err}`);
    console.log("connectec to mongodb");
    dbs = db.db('kush');

    app.get('/saveContact',(req,res)=>{
        db.collection('contact').insertOne(req.body,(error,response=>{
            console.log(response.ops);
            if(err)
                res.status(404).send("unable to insert " + err);
            res.send(response.ops);
        }))
    })

})

app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
})