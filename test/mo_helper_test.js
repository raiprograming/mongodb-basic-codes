const mongoose = require('mongoose');
//const { deleteOne } = require('../app/student');
const assert=require("assert");
mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect("mongodb://localhost/mongotube", { useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.connection
        .once('open', () => {
            console.log("connected");
           done();
        })
        .on('error', (error) => {
            console.log("ur error", error);
        });
});
beforeEach((done)=>{
    mongoose.connection.collections.students.drop(()=>{
        done();
    })
})
