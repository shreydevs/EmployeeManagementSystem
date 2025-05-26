import React from 'react'

const TaskNumbers = ({data}) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen" >
        <div className='p-10 rounded-xl py-6 px-10 w-[45%] bg-red-200'>
        <h2 className="text-3xl font-semibold" >{data.taskCounts?.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
        </div>
        <div className='p-10 rounded-xl py-6 px-10 w-[45%] bg-yellow-200'>
        <h2 className="text-3xl font-semibold" >{data.taskCounts?.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
        </div>
        <div className='p-10 rounded-xl py-6 px-10 w-[45%] bg-green-200'>
        <h2 className="text-3xl font-semibold" >{data.taskCounts?.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
        </div>
        <div className='p-10 rounded-xl py-6 px-10 w-[45%] bg-blue-200'>
        <h2 className="text-3xl font-semibold" >{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskNumbers