const Student=require("../app/student");
const assert=require("assert");
describe("delete test",()=>{
    it("deleta a doc",(done)=>{
        Student.findOneAndDelete().
        then(()=>{
            assert(true);
            done();
        })
    })
})