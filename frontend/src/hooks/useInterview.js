import { useRef, useEffect, useState } from 'react';

const useInterview = (webcamRef) => {
    const recognitionRef = useRef(null);
    const [transcript, setTranscript] = useState("");
    const [listening, setListening] = useState(false);

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

    const startListening = () => {
        recognitionRef.current.start();
        setListening(true);
    }

    const stopListening = () => {
        recognitionRef.current.stop();
        setListening(false);
    }

    return { transcript, listening, startListening, stopListening }
}

export default useInterview;