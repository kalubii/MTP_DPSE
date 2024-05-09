import React from 'react'
import MenuAppBar from '../AppBar'
import UsersList from '../UsersList'


const DashboardPage = () => {
  return (
    <>
      <div className='mt-5'>
            <MenuAppBar />
            <h1 className='my-4'>Listes des Utilisateurs</h1>
            <UsersList />
      </div>
    </>
  )
}

export default DashboardPage
