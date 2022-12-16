import React from 'react'
import Logo from '../../assets/icons/Logo'
import NotificationIcon from '../../assets/icons/NotificationIcon'
import Search from '../../assets/icons/Search'
import SidebarSubItem from '../components/SidebarSubItem'
import { navConfig } from '../config'

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
              <span className='px-2 p-2 border rounded-[0.25rem]'>
                  <Search/>
              </span>
              <span className='px-2 py-2 border rounded-[0.25rem]'>
                   <span className='bg-red inline-flex w-1 h-1 rounded-full'></span>
                  <NotificationIcon/>
              </span>
              
              <button className='px-4 py-2  bg-[#000] rounded-[0.25rem] text-white text-default '>
                  +Add New
              </button>

            </div>
          </div>

        </div>
        <div className='w-[5%]'>

        </div>
      </main>
    </>
  )
}

export default DashboardLayout
