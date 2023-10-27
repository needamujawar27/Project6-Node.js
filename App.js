const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const classesModel=require("./model/classesModel");
const divsModel=require("./model/divsModel");
const houseModel=require("./model/housesModel");
const studentsModel=require("./model/studentsModel");
const gamesModel = require("./model/gamesModel");
const detailstudentModel=require("./model/detailstudentsModel")

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/schooldb")
.then(()=>{
    console.log("MongoDB is connected successfully....")
})

app.get("/",(req,res)=>{
    res.send("Welcome to School");
});

app.get("/allclasses",async(req,res)=>{
    const result=await classesModel.find({});
    res.json(result);
});

app.post("/addclasses",async(req,res)=>{
    const addClass=new classesModel(req.body);
    await addClass.save();
    res.json("Class Added Successfully!!!!");
})

app.get("/alldivs",async(req,res)=>{
    const result= await divsModel.find({});
    res.json(result);
});

app.post("/adddivs",async(req,res)=>{
    const newDiv=new divsModel(req.body);
      await newDiv.save();
    res.send("Division Add Successfully!!!")
})

app.get("/allhouses",async(req,res)=>{
    const result=await houseModel.find({});
    res.json(result);
});

app.post("/addhouse",(req,res)=>{
    const addhouse=new houseModel(req.body);
    addhouse.save();
    res.json("Houses Added ")
})
app.get("/allstudents",async(req,res)=>{
    const result=await studentsModel.find({});
    res.json(result)
});

app.post("/addstudents",async(req,res)=>{
    const result=new studentsModel(req.body);
    result.save();
    res.send("Student Added successfully!!!!")
})

app.post("/allstudentsbyfilt",async(req,res)=>{
    const filt=req.body;
    const result=await studentsModel.find(filt);
    res.json(result);
});

app.get("/games",async(req,res)=>{
const result=await gamesModel.find({});
res.json(result)
});

app.post("/addgame",(req,res)=>{
    const addGame=new gamesModel(req.body);
    addGame.save();
    res.json("Games Added")
});

app.get("/addetail",async(req,res)=>{
    const result=await detailstudentModel.find({});
    res.json(result)
});

app.post("/displaydetail",(req,res)=>{
    const result=new detailstudentModel(req.body);
     result.save();
     res.json("Students Added Successfully")
})
app.listen(5050,()=>{
    console.log("API is runinng port number 5050")
})