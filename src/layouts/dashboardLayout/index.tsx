import React from 'react'
import Logo from '../../assets/icons/Logo'
import SidebarSubItem from '../components/SidebarSubItem'
import { navConfig } from '../config'

const DashboardLayout = () => {
  return (
    <>
      <main className='w-full h-screen flex bg-[#f9f9f9]'>
          <div className='w-[20%] bg-[#fff] py-10 flex flex-col items-center'>
                <div>
                <Logo/>
                    <p className='font-[600] '>MI ^_^ MI</p>
                   
                    
                    
                </div>
                <div>
                    {
                        navConfig.map((item:any ,index:number)=>(
                          <SidebarSubItem
                             key={index}
                             item={item}
                          />
                        ))
                    }
                </div>
          </div>
           <div className='w-[%70]'></div>       
           <div className='w-[%10]'></div>    
      </main>
    </>
  )
}

export default DashboardLayout
