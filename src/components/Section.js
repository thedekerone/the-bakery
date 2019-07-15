import React from 'react'
import './Section.css'
import {useSpring, animated, config} from 'react-spring'



 const Section=(props)=> {
  //  const slide=useSpring({top: props.toggle?'0':'100px', config:config.default, delay: 100,  position:'relative'})
  const fade=useSpring({opacity: props.toggle?1:0})
  return (
    
    <section >

        {props.children}

    </section>
    
  )
}
export default Section