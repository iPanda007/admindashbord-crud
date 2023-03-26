import React from 'react'

const scroll = () => {
    function scrollBottom(){
        console.log("scrollBottom");
        let scroll : any = document.querySelector('.chat-conversation');
        scroll.scrollTo(0,scroll.scrollHeight)
    }
  return (
    <div>
      
    </div>
  )
}

export default scroll
