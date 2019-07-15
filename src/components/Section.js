import React from 'react'
import './Section.css'
import {useSpring, animated, config} from 'react-spring'



 const Section=(props)=> {
  //  const slide=useSpring({top: props.toggle?'0':'100px', config:config.default, delay: 100,  position:'relative'})

  return (
    
    <section className={props.className} >

        {props.children}

    </section>
    
  )
}
export default Section