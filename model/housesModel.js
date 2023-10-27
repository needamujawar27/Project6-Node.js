const mongoose=require("mongoose");

const houseModel=mongoose.model("houses",{
    name:{type :String}
});
module.exports=houseModel;