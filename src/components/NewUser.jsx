import React, { useState } from 'react'

const NewUser = (props) => {

    const [user, setUser] = useState([{name:"", email:"", password:""}])
    
    const {name, email, password} = user

    // const handleChange =(e)=>{
    //     const name = e.targte.name
    //     setUser((prev)=>{
    //         return {...prev,[name]:e.target.value}
    //     })
    // }
    const handleChange =(event)=>{
        const  name = event.target.name
          setUser((oldTodo)=>{
              return {...oldTodo ,[name]:event.target.value}
          })
      }

    const handleSubmit =(e)=>{
        e.preventDefault();
        props.onAddUser(user)
       setUser({name:"",email:"",password:""})
    }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <div className='flex items-center justify-center gap-2'>
        <label htmlFor='name' className='text-base font-medium'>Your Name : </label>
        <input className='border border-gray-400 px-2 py-1 rounded-sm bg-transparent outline-none' type='text' name="name" id="name" value={name} onChange={handleChange} required/>
        </div>

        <div className='flex items-center justify-center gap-2'>
        <label htmlFor='email' className='text-base font-medium'>Your Email : </label>
        <input className='border border-gray-400 px-2 py-1 rounded-sm bg-transparent outline-none' type='email' name="email" id="email" value={email} onChange={handleChange} required/>
        </div>

        <div className='flex items-center justify-center gap-2'>
        <label htmlFor='password' className='text-base font-medium'>Password : </label>
        <input className='border border-gray-400 px-2 py-1 rounded-sm bg-transparent outline-none' type='password' name="password" id="password" value={password} onChange={handleChange} required/>
        </div>

        <div className='text-center py-2'>
            <button type='submit' className='text-base border border-gray-500 px-5 py-1 rounded-lg hover:bg-green-700 hover:text-white transition-all duration-300'>Add User</button>
        </div>

      </form>
    </div>
  )
}

export default NewUser
