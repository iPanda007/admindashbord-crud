import React from 'react'
import Logo from '../../assets/icons/Logo'
import NotificationIcon from '../../assets/icons/NotificationIcon'
import Search from '../../assets/icons/Search'
import { Outlet } from 'react-router-dom'
import SidebarSubItem from '../components/SidebarSubItem'
import { navConfig } from '../config'
import { createRipples } from 'react-ripples'
import MyRipple from '../../utils/MyRipple'

const MyRipples = createRipples({
  color: '#ffffff15',
  during: 2200,
})



const DashboardLayout = () => {
  return (
    <>
      <main className='w-full h-screen flex bg-[#f9f9f9]'>
        <div className='w-[15%] bg-[#fff] py-10 px-5 inline-flex flex-col items-center'>
          <div className='mb-[2rem]'>
            <Logo />
            <p className='font-[600] '>MI ^_^ MI</p>



          </div>
          <div>
            {
              navConfig.map((item: any, index: number) => (
                <SidebarSubItem
                  key={index}
                  index={index}
                  item={item}
                />
              ))
            }
          </div>
        </div>
        <div className='w-[80%] p-7'>
          <div className="flex items-center justify-between">
            <div>
              <h1 className='text-4xl font-[600]'>Property Dashboard</h1>
              <p className='mt-1 text-[#aeaeae]'>Welcome , Annette!</p>
            </div>
            <div className='flex items-center space-x-3' >
              <MyRipple>
                <span className='px-2 p-2 border rounded-[0.25rem]'>
                  <Search />
                </span>
              </MyRipple>
              <MyRipple>
                <span className='px-2 py-2 border rounded-[0.25rem] relative'>
                  <span className=' bg-[#ff0000] inline-block w-1 h-1 rounded-full absolute top-2 right-[10px] '></span>
                  <NotificationIcon />
                </span>
              </MyRipple>

              <MyRipples>
                <button className='px-4 py-2  bg-[#000] rounded-[0.25rem] text-white text-default '>
                  +Add New
                </button>
              </MyRipples>

            </div>
          </div>

          <div className='py-5 w-full text-right'>
              
          </div>
        </div>
        <div className='w-[5%]'>
              <Outlet/>
        </div>
      </main>
    </>
  )
}

export default DashboardLayout
