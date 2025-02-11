"use client";

import React from 'react'
import {useUser} from "@clerk/nextjs"
const Header = () => {

    const {user} = useUser();
    console.log(user);

  return (
    <header className='flex'>
      Header
    </header>
  )
}

export default Header
