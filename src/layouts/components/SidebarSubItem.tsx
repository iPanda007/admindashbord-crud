import React from 'react'

interface Props{
  item:any
}

const SidebarSubItem = ({item}:Props) => {
  return (
    <div className='w-[180px] '>
      {
          
         !item.childrens ? (
             <>
            <div className=''>
              <p className=' px-4 py-2 bg-[#EEE6E2]  flex s text-default mb-[1rem] font-[500] '>
                <div className='mr-2'> {item.icon}</div>
                {item.title}
              </p>
            </div>
         </>) : (<>
             
         </>)
      }
       </div>
  )
}

export default SidebarSubItem
