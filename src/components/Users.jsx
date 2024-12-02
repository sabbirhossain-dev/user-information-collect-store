import React from 'react'

import User from './User'

const Users = (props) => {
  return (
    <div className=" px-3 sm:px-7 md:px-16 lg:px-20 w-full py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-gradient-to-r from-purple-500 to bg-pink-800 h-auto">
      {props.users.map((user)=> <User user={user.user} key={user.id} id={user.id} onRemove={props.onRemove}/>)}
    </div>
  )
}

export default Users
