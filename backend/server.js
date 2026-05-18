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
    
    const  {updatedData,image,transcript,stressMode} = req.body;

    console.log(updatedData);

    const modeInstruction = stressMode? `Be very aggressive, interrupt with follow-ups, challenge every answer skeptically,show impatience, give harsh feedback. Create pressure intentionally.`
      : `Be professional and calm. Give balanced feedback.`;

    try{
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const userInfo = updatedData[0];
        const QAs = updatedData.slice(1);

        const experienceMap = { 1: 'Beginner', 2: 'Intermediate', 3: 'Advanced' };
        const aimLabels = ['Land First Job', 'Switch Companies', 'Crack FAANG', 'Freelancing'];
        const selectedAims = userInfo.aim
          .map((selected, index) => selected ? aimLabels[index] : null)
          .filter(Boolean)
          .join(', ');

        const prompt = `
        You are a professional technical interviewer with deep knowledge of the tech sector. 
        You are interviewing the following candidate:

        - Name: ${userInfo.name}
        - Target Role: ${userInfo.role}
        - Experience Level: ${experienceMap[userInfo.experience]}
        - Interview Goal: ${selectedAims}

        CONVERSATION HISTORY:
        ${QAs.length === 0 
          ? "No questions asked yet. This is the first question." 
          : QAs.map((qa, i) => `Q${i+1}: ${qa.q}\nA${i+1}: ${qa.a}`).join('\n\n')
        }

        ${QAs.length > 0 
          ? `Also analyze the candidate's body language and confidence from the attached image.
            Review their most recent answer and provide a score and brief feedback before asking the next question.
            Each question should be progressively harder than the previous one and relate to prior answers.`
          : `Ask the first opening technical question appropriate for a ${experienceMap[userInfo.experience]} level ${userInfo.role} candidate.`
        }

        STRICT OUTPUT FORMAT — no deviation:
        ${QAs.length > 0 ? `X/10
        [2-3 sentence feedback on answer and body language. Be blunt and professional.]
        [Next question]` 
        : `[Opening question only. No score or feedback for the first question.]`}

        RULES:
        - No bullet points, no fluff, no pleasantries
        - Do not repeat any previous question
        - Questions must align with the candidate's role and goal
        - Be direct and professional like a real senior interviewer
        - Do NOT ask questions that require the candidate to write code. 
          This is a verbal interview only. Ask conceptual, theoretical, 
          and scenario-based questions instead. For coding topics, ask 
          the candidate to verbally explain the logic, approach, or 
          thought process instead of writing actual code.
        - ${modeInstruction}`;

        const imagePart = image ? fileToGenerativePart(image, "image/jpeg") : null;
        const contentParts = imagePart ? [prompt, imagePart] : [prompt];
        const result = await model.generateContent(contentParts);

        const aiText = result.response.text();
        res.json({ reply: aiText });
    }catch(err){
        console.log(err);
        res.status(500).json("Request failed..")
    }

})

app.listen(port,() => console.log("Server listening on port 5000"));