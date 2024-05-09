import React, { useContext, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/questionSlice'
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { INCREMENT } from '../redux/resultSlice'
import { useNavigate} from 'react-router-dom'
import { IsAuth } from '../Context/AuthContext'

const Questions = () => {

    let [value, setValue] = useState('')
    let answer = useRef()
    let [currentpage, setCurrentPage] = useState(1)
    let questionData = useSelector(state => state.questionSlice)
    let {auth, setAuth} = useContext(IsAuth)
    let navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => dispatch(fetchData()))()
    }, [])

    const handleChange = (event, index) => {
        setValue(event)
        answer.current = questionData[index]?.options?.indexOf(event)
        console.log(answer.current)
    }

    const handleClick = (correctAnswer) => {
        console.log(correctAnswer, answer.current)
        correctAnswer == answer.current && dispatch(INCREMENT())

        console.log(currentpage, questionData.length)
        if(currentpage == questionData.length) navigate('/result', {replace : true}) 
        else setCurrentPage(prev => prev + 1)

        setValue('')
    }

  return (
    <>
        <div className='shadow-xl rounded-lg w-3/4 m-auto h-[60vh] mt-7'>
            {questionData?.map((ele,i) => {
                const {id, question, options, correctOptionIndex} = ele
                return (
                    <div key={id} className={`${currentpage == id ? 'block': 'hidden'} p-2 relative w-full h-full`}>
                        <h1 className='text-lg font-bold'>{question}</h1>
                        <RadioGroup onChange={event => handleChange(event, i)} value={value}>
                            <Stack direction='column'>
                                {options.map((option,i) => (
                                    <Radio value={option} key={i} >{option}</Radio>
                                ))}
                            </Stack>
                        </RadioGroup>
                        <div className='text-end absolute bottom-6 right-4'>
                            <button onClick={() => handleClick()} className='active:bg-sky-700 transition-all border mr-1 border-black w-[110px] h-9 rounded-md bg-sky-500 font-bold text-white'>Skip</button>
                            <button onClick={()=>handleClick(correctOptionIndex)} disabled={value == ''} className='active:bg-sky-700 transition-all border border-black w-[110px] h-9 rounded-md bg-sky-500 font-bold text-white'>Next</button>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Questions