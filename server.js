const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const path = require('path');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/devconnector2', { useNewUrlParser: true });

mongoose.connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT,function(){
    console.log(`server is running on port: ${PORT}`);
});

