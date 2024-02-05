const mongoose= require("mongoose");


mongoose.connect("mongodb+srv://mukesh:Mk12345@cluster0.reue9dx.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true
}).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})


Schema = mongoose.Schema({
    uname:String,
    pass:String
})

StudentModel = mongoose.model("Student",Schema);
module.exports = StudentModel