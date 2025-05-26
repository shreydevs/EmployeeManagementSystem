import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="flex-shrink-0  w-[300px] p-5  bg-purple-200 rounded-xl" > 
            <div className='flex justify-between  text-white items-center' >
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className="text-sm">{data.taskDate}</h4>
            </div>
                
                <h2 className='mt-5 text-2xl font-semibold'>New: {data.taskTitle}</h2>
                <p className="text-sm">{data.taskDescription}</p>
                <div className=" mt-4">
                    <button className='bg-green-500 py-1 px-2 text-sm w-full'>Accept Task</button>
                
                </div>
        </div>
  )
}

export default NewTask