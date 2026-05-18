import { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { useInterviewContext } from '../context/InterviewContext';
import { useNavigate } from 'react-router-dom';

const useInterview = (webcamRef) => {
    const recognitionRef = useRef(null);
    const [transcript, setTranscript] = useState("");
    const [listening, setListening] = useState(false);
    const { interviewData, addToInterview } = useInterviewContext();
    const [aiReply, setAiReply] = useState('');
    const [loading, setLoading] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [stressMode, setStressMode] = useState(false);

    const questionCount = interviewData.length-1 < 0? 0:interviewData.length-1;

    const toggleMode = () => {
        setStressMode(!stressMode);
    }

    const navigate = useNavigate();

    useEffect(() => {
    const getFirstQuestion = async () => {
        setLoading(true);
        const { data } = await axios.post("http://localhost:5000/api/chat", {
        updatedData:interviewData,
        image: null,
        transcript: "Start the interview"
        });
        setLoading(false);
        setAiReply(data.reply);
    }

    getFirstQuestion();
    }, [])


    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onresult = (event) => {
            const text = event.results[0][0].transcript;
            setTranscript(text);
        }

        return () => {
            recognitionRef.current.abort();
        }
    },[])


    useEffect(() => {
    let interval;
    if (listening) {
        interval = setInterval(() => setTimeElapsed(prev => prev + 1), 1000);
    } else {
        setTimeElapsed(0);
    }
    return () => clearInterval(interval);
    }, [listening]);


    const wordCount = transcript.split(' ').filter(Boolean).length;
    const fillerCount = (transcript.match(/\b(um|uh|like|so|actually)\b/gi) || []).length;
    const wpm = timeElapsed > 0 ? Math.round((wordCount / timeElapsed) * 60) : 0;
    const confidenceScore = Math.max(0, 10 - (fillerCount * 0.5)).toFixed(1);


    const startListening = () => {
        recognitionRef.current.start();
        setListening(true);
    }

    const stopListening = async () => {
        recognitionRef.current.stop();
        setListening(false);
        const img = webcamRef.current.getScreenshot();

        const updatedData = [
            ...interviewData,
            {
            type: "qa",
            q: aiReply,
            a: transcript
            }
        ];

        addToInterview({
            type:"Question and answer",
            q:aiReply,
            a:transcript
        })
        
        try{
            setLoading(true);
            const {data} = await axios.post("http://localhost:5000/api/chat",{
                updatedData,
                image:img,
                transcript,
                stressMode
            })
            setLoading(false);


            setAiReply(data.reply);

        }catch(err){
            console.log(err);
            setAiReply("Something went wrong, try again later...");
        }

        if (updatedData.length === 6) {
           navigate('/results');
        }
    }

    const analyzeFace = async () => {
        const img = webcamRef.current.getScreenshot();

        try{
            setLoading(true);
            const {data} = await axios.post("http://localhost:5000/api/chat",{
                updatedData:interviewData,
                image:img,
                transcript:"",
                stressMode
            })
            setLoading(false);

            setAiReply(data.reply);
        }catch(err){
            console.log(err);
            setAiReply("Something went wrong, try again later...");
        }
    }

    return { transcript, listening, startListening, stopListening, aiReply, loading, wordCount, fillerCount, wpm, confidenceScore, questionCount, stressMode,toggleMode,analyzeFace};
}

export default useInterview;