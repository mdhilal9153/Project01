import { createContext, useContext, useState } from "react"

const InterviewContext = createContext();

export function InterviewProvider({children}){
    const[interviewData, setInterviewData] = useState([]);

    const addToInterview = (item) => {
        setInterviewData(prev => [...prev, item]);
    }

     return (
     <InterviewContext.Provider value={{ interviewData, addToInterview }}>
        {children}
     </InterviewContext.Provider>
  );
}

export function useInterviewContext() {
  return useContext(InterviewContext)
}