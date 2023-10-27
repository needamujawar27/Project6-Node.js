const mongoose=require("mongoose");

const gamesModel=mongoose.model("games",{
    name:{type:String}
});
module.exports=gamesModel