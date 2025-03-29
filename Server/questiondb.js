require("dotenv").config();

const connectDB=require("./db/connect");
const Question=require("./models/questions");
const QuestionJson=require("./questions.json");

const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await Question.create(QuestionJson);
        console.log("success");
    }catch(error){
        console.log(error);
    }
}
start();