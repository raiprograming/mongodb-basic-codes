const Student=require("../app/student");
const assert=require("assert");
describe("update test",()=>{
    let updater;
    beforeEach((done)=>{
        updater=new Student({name:updater});
        updater.save().then(()=>{
            done();
        })
    });
    it("updating",(done)=>{
        updater.set('name',"upupdater")
        updater.save().then(()=>{
            done();
        })
    })
})