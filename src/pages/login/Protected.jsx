import React, {  useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
        const {Component}=props
        const navigate = useNavigate()
        useLayoutEffect(()=>{
            let login = localStorage.getItem('token');
            if(!login){
                navigate('/login')
            }
        })
  return (


    <div>    
<Component/>
    </div>
  )

}

export default Protected