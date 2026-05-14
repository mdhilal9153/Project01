import React, { forwardRef, useImperativeHandle } from 'react'
import { useRef, useEffect } from 'react'


const WebcamFeed = forwardRef((props,ref) => {

    const videoRef = useRef(null);
    const streamRef = useRef(null);

    useImperativeHandle(ref, ()=> ({
      getScreenshot: () => {
        const canvas = document.createElement('canvas'); // created in memory
        canvas.width = videoRef.current.videoWidth;      // sized to match video
        canvas.height = videoRef.current.videoHeight;
        canvas.getContext('2d').drawImage(videoRef.current, 0, 0); // draws current frame
        return canvas.toDataURL('image/jpeg');            // returns base64 string
      }
    }))
    
    useEffect(() => {
      const startCam = async () =>{

        const stream = await navigator.mediaDevices.getUserMedia({video:true});
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
      
      startCam();

      return () => {
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
        }
      }

    },[])


  return (
    <div className='h-[350px] w-full rounded-lg overflow-hidden bg-[#10141e] border border-white/20'>
        <video ref={videoRef} autoPlay muted 
        className='w-full h-full object-cover'></video>
    </div>
  )
})

export default WebcamFeed
