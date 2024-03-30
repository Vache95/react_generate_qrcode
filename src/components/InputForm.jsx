import React from 'react'
import InputFeild from './InputFeild'
import InputColor from './InputColor'

const InputForm = () => {
  return (
    <div className='col-span-2 p-6 grid gap-4'>
       <InputFeild/>
       <InputColor/>
    </div>
  )
}

export default InputForm