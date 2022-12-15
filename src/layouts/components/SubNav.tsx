import React from 'react'


interface Props {
    title:string,
   item :any,
}

const SubNav = ({item,title}:Props) => {
  return (
    <div>
          <div>
                      <p  className=' px-4 py-2   flex s text-default mb-[1rem] font-[500] '>
                <div className='mr-2'> {item.icon}</div>
                {title}
          </p>
            </div>
          {
              
          }
    </div>
  )
}

export default SubNav
