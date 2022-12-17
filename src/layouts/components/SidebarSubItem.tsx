import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import SubNav from './SubNav'
import MyRipple from '../../utils/MyRipple'


interface Props {
  item: any,
  index: number
}

const SidebarSubItem = ({ item, index }: Props) => {

  const location = useLocation();

  return (
    <div className=''>
      {

        !item.childrens ? (
          <>
     
              
            <div className=' mb-[1rem] cursor-pointer'>
              <MyRipple>
                <Link to={item.link}>
                  <p className={` px-4 py-[0.6rem] ${item.link === location.pathname && "bg-[#EEE6E2]"} w-[190px] flex overflow-hidden  text-default  font-[500] `}>
                    <div className='mr-2'> {item.icon}</div>
                    {item.title}
                  </p>
                </Link>

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
