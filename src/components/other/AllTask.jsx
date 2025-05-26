import { AuthContext } from '../../context/AuthProvider'
import React, { useContext } from 'react'


const AllTask = () => {
  const [userData,setUserData]=useContext(AuthContext)
  
  return (
   <div  className='text-white bg-[#1c1c1c] p-5 rounded h-70  mt-5'>
      <div className="bg-purple-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className='w-1/5 '>Employee Name</h2>
        <h3 className='w-1/5 '>New Task</h3>
        <h5 className='w-1/5 '>Active Task</h5>
        <h5 className='w-1/5 '>Completed</h5>
        <h5 className='w-1/5 '>Failed</h5>
      </div>
      <div id="alltasks" className="h-[80%] overflow-auto">
        {userData.employees.map(function(elem,idx){
      return <div  key={idx} className="bg-red-400 mb-2 py-2 px-4 flex  justify-between rounded">
        <h2 className='w-1/5 '  >{elem.firstName}</h2>
        <h3 className='w-1/5 '  >{elem.taskCounts.newTask}</h3>
        <h5 className='w-1/5 '  >{elem.taskCounts.active}</h5>
        <h5 className='w-1/5 ' >{elem.taskCounts.completed}</h5>
        <h5 className='w-1/5 ' >{elem.taskCounts.failed}</h5>
      </div>

      
  })}
      </div>
      
   </div>
  )
}

export default AllTask