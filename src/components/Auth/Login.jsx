import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)
    setEmail("")
    setpassword("")
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 p-20 rounded-4xl border-white'>
            <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col items-center justify-center gap-3'>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}}
                 required className="rounded-full  border-2 border-white py-3 px-5 placeholder:text-gray-400 text-xl text-white" type="email" placeholder='Enter your email' />
                <input value={password} onChange={(e)=>{setpassword(e.target.value)}}
                className="rounded-full border-2 border-white py-3 px-5 placeholder:text-gray-400 text-xl  text-white" type="password" placeholder='Enter your password' />
                <button className="text-white border-none rounded-full  bg-emerald-500 py-3 px-5 placeholder:text-white text-xl">Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login