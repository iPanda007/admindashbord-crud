import React from 'react'
import { Link } from 'react-router-dom'

interface Props{
    item: any
}

const SidebarSubItem= ({item}:Props) => {

  if(item){
    return     <div>
    {item.title}
</div>
  }
 
 if(item.childrens){
   return(
    <div>all</div>
   )
 }
}
    
  
  


export default SidebarSubItem
