import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"


const SharedLayout = () => {
  return (
    <div className='w-full'>
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default SharedLayout
