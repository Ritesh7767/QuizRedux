import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Questions from '../Components/Questions'
import Result from '../Components/Result'

const RoutingLayout = () => {
  return (
    <Routes>
        <Route path='/' element={<Questions/>}/>
        <Route path='/result' element={<Result/>}/>
    </Routes>
  )
}

export default RoutingLayout 