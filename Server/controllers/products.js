const Question=require("../models/questions");

const getquestions = async (req, res) => {
    const MyData=await Question.find({});
    res.status(200).json({ MyData});
};

module.exports = getquestions;
