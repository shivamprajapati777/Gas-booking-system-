const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/GasBooking');
// this line use for extrenal file like user create schema
const user = require('./user');

const admin = require('./admin');
const booking = require('./booking');
const feedback=require('./feedback');

const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.post('/adminlogin', async (req, res) => {
    try {
        if (req.body.adminname && req.body.password) {
            let data = await admin.find(req.body);
            if (data[0].adminname) {
                res.send(data);
            } else {
                res.send({ status: "Username or Password not matched" });
            }
        }
    } catch {
        res.send({ status: "Something went Wrong" });
    }
});

app.post('/registration', async (req, res) => {
    // console.log('a');
    try {
        if (req.body.name && req.body.email && req.body.password && req.body.contact && req.body.city && req.body.aadhar) {
            let data = new user(req.body);
            data = await data.save();
            res.send({ Status: "Data Added Succesfully" });
        } else {
            res.send({ Error: "Syntax Error" });
        }
    } catch {
        res.send({ Error: "Something went wrong" });
    }

});

app.post('/userlogin', async (req, res) => {
    try {
        if (req.body.email && req.body.password) {

            let data = await user.find(req.body);
            if (data[0].email) {
                res.send(data);
            } else {
                res.send({ status: "Username or Password not matched" });
            }
        }
    } catch {
        res.send({ status: "Something went Wrong" });
    }
});

app.post('/booknow', async (req, res) => {
    try {
        let data = new booking(req.body);
        data.save();
        res.send(data);
    } catch {
        res.send({ Error: "Something went Wrong" });
    }
});


app.get('/userbooking/:email', async (req, res) => {
    let data = await booking.find({
        "$or": [
            { email: { $regex: req.params.email } }
        ]
    });
    if (data.length > 0) {
        res.send(data);
    } else {
        res.send({ Status: "No Booking Found" });
    }

});
app.get('/allbooking', async (req, res) => {
    let data = await booking.find();

    if (data.length > 0) {
        res.send(data);
    } else {
        res.send({ Status: "No Booking Found" });
    }

});

app.delete('/deletedata/:id', async (req, res) => {
    try {
        let data = await booking.deleteOne({
            _id: req.params.id
        });
        res.send({ Success: "Data Deleted" });
    } catch {
        req.send({ Error: "Something went Wrong!!" });
    }
});

app.get('/changestatus/:id', async (req, res) => {
    let data = await booking.findOne({
        _id: req.params.id
    });
    res.send(data);
});

app.put('/updatestatus/:key', async (req,res)=>{
    let data = await booking.updateOne({
        _id:req.params.key
    },
    {
        $set:req.body
    }
    );
    res.send({Success:"Upadated"});
});
    app.post('/feedback',async(req,res)=>{
    let data = new feedback(req.body);
    data.save();
    res.send({Saved:data});
});
app.get('allfeedback',async(req,res)=>{
    let data = await feedback.find();
    res.send(data);

})


app.listen(4500);