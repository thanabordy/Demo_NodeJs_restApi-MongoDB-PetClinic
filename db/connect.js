const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/node_clinic', { useNewUrlParser: true })

mongoose.connection.on('connected', function(){
    console.log('Mongoose default connection open');
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose defaults connection open' + err);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

module.exports = mongoose;