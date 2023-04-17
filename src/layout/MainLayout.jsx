import { Outlet } from 'react-router-dom'
import Menu from '../Componenets/Menu'

const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

export default MainLayout
