// import React, { useState } from 'react'
// import {v4 as uuidv4} from 'uuid'

// import Users from './Users'
// import NewUser from './NewUser'

// const Home = () => {

//     const [users, setUsers] = useState([])


//     const handleAddUser =(user)=>{
//         setUsers((prevUser)=>{
//             return [...prevUser ,{id:uuidv4(), user}]
//         })
//     }

//     const handleRemove =(id)=>{
//         setUsers((prevUser)=>{
//             const filtered = prevUser.filter((user)=>user.id !== id)
//             return filtered
//         })
//     }

//   return (
//     <>
//       <div className={style.body}>
//         <h1>Collecting User Information</h1>
//         <NewUser  onAddUser={handleAddUser}/>
//         <Users users={users} onRemove={handleRemove} />
//       </div>
//     </>
//   )
// }

// export default Home


import React, { useState } from 'react'
import NewUser from '../components/NewUser'
import Users from '../components/Users'
import {v4 as uuidv4} from 'uuid'

const Home = () => {

  const [users , setusers] = useState([])

  const handleAddUser =(user)=>{
    setusers ((prevUser)=>{
      return [...prevUser, {id:uuidv4(), user}]
    })
  }

  const handleRemove =(id)=>{
    setusers((prevUser)=>{
      let filter = prevUser.filter((user)=>user.id !== id)
      return filter
    })
  }

  return (
    <div className='bg-gradient-to-r from-purple-500 to bg-pink-800 text-white h-[700px]'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl py-10 font-medium'>User Information</h1>
        <NewUser onAddUser={handleAddUser}/>
        <Users users={users} onRemove={handleRemove} />
      </div>
    </div>
  )
}

export default Home

