import React from 'react'
import { createRipples } from 'react-ripples'

const MyRipples = createRipples({
    color: '#00000015',
    during: 2200,
})

const MyRipple = ({children}:any) => {
  return (

          <MyRipples>
            {children}
        </MyRipples>
 
  )
}

export default MyRipple
