import React from 'react'

export default function Menu(pro) {
  return (
    <div>{
    pro.children
    } 
    <nav>
        <ul>
           <li>
            home
           </li>
           <li>about</li>
           <li>services</li>
           <li>contact</li>
           <li>testimonials</li> 
        </ul>
    </nav>
    </div>  
  )
}
