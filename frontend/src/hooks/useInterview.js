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

    const navigate = useNavigate();


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
        
        setLoading(true);
        const {data} = await axios.post("http://localhost:5000/api/chat",{
            interviewData,
            image:img,
            transcript
        })
        setLoading(false);


        setAiReply(data.reply);

        addToInterview({
            type:"Question and answer",
            q:data.reply,
            a:transcript
        })

        if (interviewData.length + 1 === 6) {
           navigate('/results');
        }
    }

    return { transcript, listening, startListening, stopListening, aiReply, loading, wordCount, fillerCount, wpm, confidenceScore };
}

export default useInterview;