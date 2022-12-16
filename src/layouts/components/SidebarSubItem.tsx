import React from 'react'
import { Link } from 'react-router-dom'
import SubNav from './SubNav'
import MyRipple from '../../utils/MyRipple'

interface Props {
  item: any,
  index: number
}

const SidebarSubItem = ({ item, index }: Props) => {
  return (
    <div className=''>
      {

        !item.childrens ? (
          <>
     
              
            <div className=' mb-[1rem] cursor-pointer'>
              <MyRipple>
                <p className={` px-4 py-[0.6rem]   w-[190px] flex overflow-hidden  text-default  font-[500] `}>
                  <div className='mr-2'> {item.icon}</div>
                  {item.title}
                </p>

              </MyRipple>
            </div>
            
          </>) : (<>
            <SubNav
              item={item.childrens}
              title={item.title}
              icon={item.icon}
            />
          </>)
      }

    </div>
  )
}

export default SidebarSubItem
