const mongoose=require("mongoose");

const detailstudentModel=mongoose.model("detailstudents",{
    fname:{type:String},
    lname:{type:String},
    mobile:{type:String},
    city:{type:String},
    pincode:{type:String},
    state:{type:String}
});
module.exports=detailstudentModel;