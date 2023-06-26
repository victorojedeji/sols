import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"


const SharedLayout = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default SharedLayout
