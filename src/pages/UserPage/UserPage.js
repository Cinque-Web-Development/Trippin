import React from 'react'
import './UserPage.css'

export default function UserPage({user}) {
  return (
    <div>
      <h1 className="user-name">{user.name}</h1>
    </div>
  )
}
