import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {

  let result = useSelector(state => state.resultSlice)
  return (
    <>
      <h1 className='text-3xl font-bold mt-5 ml-5'>Result</h1>
      <h2 className='text-xl font-bold mt-2 ml-6'>Your Score :- {result} </h2>
    </>
  )
}

export default Result