import React from 'react'
import Sidebar from '../components/Sidebar'
import HomeLogged from '../containers/HomeLogged'
import "../styles/App.css";

export default function Dashboard() {
  return (
    <div>
        <div className='main-wrapper'>
        <Sidebar />
        <HomeLogged />
        </div>
    </div>
  )
}
