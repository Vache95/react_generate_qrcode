import React from 'react'

const InputFeild = () => {
  return (
    <div>
        <label className='font-semibold text-md'>
            Your URL
        </label>
        <input
         type='url'
         className='w-full border-2 py-1 px-3 text-gray-700
         rounded-sm'
         placeholder='https://example.com'
        />
    </div>
  )
}

export default InputFeild