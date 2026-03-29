import React, { useState } from 'react'
import {ArrowRight} from 'lucide-react'

const InfoForm = () => {

    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    const [btn, setBtn] = useState(2);

    const [aim , setAim] = useState([false,false,false,false]);

    const arrC = (num) => {
        let arr = [...aim];
        arr[num] = !arr[num];
        console.log(aim);
        setAim(arr);
        console.log(aim);
    }

    const submitHandler = (e) => {
        console.log('submitted');
        e.preventDefault();
    }

    const nameC = (e) => {
        console.log(name);
        setName(e.target.value);
    }

    const roleC = (e) => {
        console.log(role);
        setRole(e.target.value);
    }



  return (
    <div className='flex justify-center items-center mt-10'>
      <form className='bg-[#10141e] border border-[#808080] p-5 w-1/2 rounded-xl overflow-auto' onSubmit={submitHandler}>
        <div className='flex flex-col justify-items-start'>
            <label htmlFor='name' className='text-white font-semibold mb-2'>Full name</label>
            <input 
            onChange={nameC}
            value={name}
            className='text-white border border-[#242931] bg-[#1b2029] p-1 mb-2 rounded-xl'
            id='name'
            type='text' 
            placeholder='Enter your full name' 
            required
            />
        </div>
        

        <div className='flex flex-col justify-items-start'>
            <label htmlFor='role' className='text-white font-semibold mb-2'>Target role</label>
            <input 
            onChange={roleC}
            value={role}
            className='text-white border border-[#1b2029] bg-[#1b2029] p-1 rounded-xl'
            id='role'
            type='text' 
            placeholder='Enter your target role' 
            required
            />
        </div>

        <p className='text-white font-semibold mt-3'>Experience Level</p>
        <div className='mt-2 flex justify-around'>
            <button type='button' onClick={() => setBtn(1)} className={`border mr-2 py-2 px-10 rounded-xl transition-all bg-[#1b2029] ${btn == 1? 'border-[#00E5FF] text-[#00E5FF]': 'text-[#808080] border-[#808080]'}`} >Beginner</button>
            <button type='button' onClick={() => setBtn(2)} className={`border mr-2 py-2 px-10 rounded-xl transition-all bg-[#1b2029] ${btn == 2? 'border-[#00E5FF] text-[#00E5FF]' : 'text-[#808080] border-[#808080]'}`}>Intermediate</button>
            <button type='button' onClick={() => setBtn(3)} className={`border mr-2 py-2 px-10 rounded-xl transition-all bg-[#1b2029] ${btn == 3? 'border-[#00E5FF] text-[#00E5FF]' : 'text-[#808080] border-[#808080]'}`}>Advanced</button>
        </div>

        <p className='text-white font-semibold mt-3'>Interview Goal</p>
        <div className='mt-2 flex justify-around'>


            <button type='button' onClick={() => arrC(0)} className={`border mr-2 py-2 px-6 rounded-full transition-all bg-[#1b2029] ${aim[0]? 'border-[#006400] text-[#006400]': 'text-[#808080] border-[#808080]'}`}>Land first job</button>
            <button type='button' onClick={() => arrC(1)} className={`border mr-2 py-2 px-6 rounded-full transition-all bg-[#1b2029] ${aim[1]? 'border-[#006400] text-[#006400]': 'text-[#808080] border-[#808080]'}`}>Switch companies</button>
            <button type='button' onClick={() => arrC(2)} className={`border mr-2 py-2 px-6 rounded-full transition-all bg-[#1b2029] ${aim[2]? 'border-[#006400] text-[#006400]': 'text-[#808080] border-[#808080]'}`}>Crack FAANG</button>
            <button type='button' onClick={() => arrC(3)} className={`border mr-2 py-2 px-6 rounded-full transition-all bg-[#1b2029] ${aim[3]? 'border-[#006400] text-[#006400]': 'text-[#808080] border-[#808080]'}`}>Freelancing</button>
        </div>


        <button type='submit' className='bg-[#00FFFF] mt-5 w-full rounded-2xl py-1 flex justify-center items-center text-lg'>
            Start Interview<ArrowRight/>
        </button>


      </form>
    </div>
  )
}

export default InfoForm
