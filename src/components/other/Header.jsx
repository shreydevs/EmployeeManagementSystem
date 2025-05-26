import React from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {
  const logOutUser=()=>{
      localStorage.setItem('loggedInUser','')
      props.changeUser('')
      //window.location.reload()
  }
  return (
    <div className="flex text-white items-end justify-between" >
      
        <h1 className="text-2xl font-medium" >Staff ManageGo <br /> <span className='text-3xl font-semibold' ></span></h1>
        <button onClick={logOutUser} className="bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium">Log out</button>
    </div>
  )
}

export default Header