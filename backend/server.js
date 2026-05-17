require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use(cors());
app.use(express.json({ limit: '50mb' }));

function fileToGenerativePart(base64String, mimeType) {
  return {
    inlineData: {
      data: base64String.split(',')[1], 
      mimeType
    },
  };
}

app.post('/api/chat',async (req,res) =>{
    
    const  {interviewData,image,transcript} = req.body;

    console.log(interviewData);

    try{
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const userInfo = interviewData[0];
        const QAs = interviewData.slice(1);

        const prompt = `
        You are a professional technical interviewer who has immense knowledge of tech sector, You are interviewing a candidate whose 
        details are ${userInfo}.
        
        This is the questions and answers array attached up till now ${QAs}. If the array is empty that means this is the first question.
        If the array contains question and answer pairs, take that as a reference and ask a question that is reletively harder than privous one
        and tend to relate with the questions asked before but do not repeat the question. The questions should align with the roles and the aim
        of the candidate.
        
        IMPORTANT- The answer should be in a strict and presentable format. Before asking the question review the most recent question and 
        candidate's answer, review that and give the score for the answer out of 10.Give a very short brief of review of candidate's 
        answer before asking the question in paragrapgh (NO bullet points, no fluff).
        
       STRICT OUTPUT FORMAT - follow this exactly, no deviation:

        [Score: X/10]
        [2-3 sentence feedback on the answer and body language]
        [Next question]

        Example:
        7/10
        Your explanation was surface level and lacked depth on the event loop internals. Eye contact was inconsistent suggesting nervousness.
        What is the difference between setTimeout and Promise.resolve() in terms of execution order?`;

        const imagePart = fileToGenerativePart(image, "image/jpeg");
        const result = await model.generateContent([prompt,imagePart]);

        const aiText = result.response.text();
        res.json({ reply: aiText });
    }catch(err){
        console.log(err);
        res.status(500).json("Request failed..")
    }

})

app.listen(port,() => console.log("Server listening on port 5000"));