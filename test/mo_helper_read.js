const Student=require("../app/student");
const mongoose=require("mongoose");
const assert=require("assert");
describe("read test",()=>{
    beforeEach(done=>{
        reader=Student({name:"reader"});
        reader.save().
        then(()=>{
            done();
        })
    });
    it("reading",done=>{
        Student.find().
        then((stud)=>{
            console.log(stud[0].toString());
            assert(true);
            done();
        })
    })
})