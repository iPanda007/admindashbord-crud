import React from 'react'
 import { Link } from 'react-router-dom'
import SubNav from './SubNav'
interface Props{
  item: any,
  index:number
}

const SidebarSubItem = ({item,index}:Props) => {
  return (
    <div className='w-[180px] '>
      {
          
         !item.childrens ? (
             <>
            <Link to={""}>
              <p  className={` px-4 py-2 ${index }  flex s text-default mb-[1rem] font-[500] `}>
                <div className='mr-2'> {item.icon}</div>
                {item.title}
              </p>
            </Link>
         </>) : (<>
            <SubNav
              item = {item.childrens}
              title={item.title}
            />
         </>)
      }
    
       </div>
  )
}

export default SidebarSubItem
