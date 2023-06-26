import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Announcement from "../Components/Announcement"


const SharedLayout = () => {
  return (
    <div className='w-full'>
      <Announcement />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default SharedLayout
