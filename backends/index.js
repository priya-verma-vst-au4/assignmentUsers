const express = require('express');
const cors = require('cors');
require('./config');
const User = require('./User')

const app = express();
app.use(express.json())
app.use(cors())

app.post('/save',async (req, res)=>{
    let user = new User(req.body);
    let result = await user.save()
    res.send(result)
});
app.get('/',async (req, res)=>{
    let user = await User.find();
    
    res.send(user)
});

app.put('/save/:id',async (req, res)=>{
    let user = await User.updateOne(
        {_id: req.params.id},{$set: req.body}
    );
    
    res.send(user)
});
app.delete('/user/:id',async (req, res)=>{
    let user = await User.deleteOne(
        {_id: req.params.id}
    );
    
    res.send(user)
});



app.listen(5000)