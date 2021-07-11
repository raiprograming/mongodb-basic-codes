const Student = require("../app/student");
const assert = require("assert");
describe(
    "create records", () => {
        it("create a user in db", done => {
            const sam=new Student({name:"sam"});
            sam.save()
            .then(()=>{
                assert(!sam.isNew);
                done();
            })
            .catch(()=>{
                console.log("error");
            })
        })
    }
);