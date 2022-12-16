import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  title: string,
  item: any,
  icon:any
}

const SubNav = ({ item, title,icon }: Props) => {

  const [toggle, setToggle] = useState<boolean>(!!'')

  console.log(toggle)

  return (
    <div className='cursor-pointer'>
      <div
        onClick={
          () => setToggle(!toggle)
        }
      >
        <p className=' px-4 py-[0.6rem]   flex  text-default font-[500] '>
          <div className='mr-2'>
              {icon}
          </div>
          {title}
        </p>
      </div>
      {
        item.map((child: any, index: number) => {
          let count = index + 1
          let delay = count / 10
          return (
            <div key={index} style={{ transitionDelay: " " + count / 10 && delay + "s" }} className={` h-0 overflow-hidden  transition-all duration-300 ease-in-out opacity-0   ${toggle  && "pl-[2rem] h-[38px] opacity-100"}`}>
              <Link to={""}>
                <p style={{ transitionDelay: " " + count / 10 && delay + "s" }} className={`  overflow-hidden   flex  text-default font-[500] transition-all duration-300 ease-in-out h-[35px] px-4 py-[0.6rem] `}>
                  <div className='mr-2'> {child.icon}</div>
                  {child.title}
                </p>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default SubNav
