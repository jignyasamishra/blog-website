import React from 'react'
import { Outlet } from 'react-router';
import Navbar from './Navbar';

export default function Yesnavbar() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
