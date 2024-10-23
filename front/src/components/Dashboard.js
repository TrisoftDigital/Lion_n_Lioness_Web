import React from 'react'
import Sidebar from '../components/Sidebar'
// import Navbar from '../components/Sidebar'
import HomeLogged from '../containers/HomeLogged'
import "../styles/App.css";
import SideMenu from './SideMenu';

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
