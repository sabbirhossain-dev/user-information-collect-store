import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'


const User = (props) => {

    const {name, email, password} = props.user
    const {id} = props

    const handleRemove =(id)=>{
      props.onRemove(id)
    }

  return (
    <article className="bg-gray-900 text-white flex justify-between items-center p-5 rounded-md">
     <div className='flex flex-col gap-1'>
     <h3 className='font-medium'><span className='font-light'>name: </span>{name}</h3>
      <p className='font-medium'><span className='font-light'>email: </span> {email}</p>
      <p className='font-medium'><span className='font-light'>password: </span>{password}</p>
     </div>
     <div>
        <button className="text-red-800 hover:text-red-500 transition-all duration-300">
            <FaTrashAlt size={24} onClick={()=>{handleRemove(id)}} />
        </button>
     </div>
    </article>
  )
}

export default User
