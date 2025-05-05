import React, { useState } from 'react'
import HomePage from './HomePage'
import Player from './PlayerNameForm'

const MainPage = () => {



  return (
    <div>
        <h1 className="flex justify-center m-7 mb-32 font-bold text-xl">Tic Tac Toe</h1>
    
      <HomePage />
    </div>
  )
}

export default MainPage
