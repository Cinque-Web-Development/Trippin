import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import userService from '../../services/userService'
import './UserPage.css'

export default function UserPage() {
  const [user, setUser] = useState()
  const {id} = useParams()

  useEffect( () => {
    async function fetchUser() {
      const userInfo = await userService.getUserById(id)
      setUser(userInfo)
    }
    fetchUser()
  },[id])

  return (
    user ?
    <div>
      <h1 className="user-name">{user.name}</h1>
    </div>
    :
    ''
  )
}
