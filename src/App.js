import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import {useSpring, animated} from 'react-spring'

import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      toggle:false,

    }
  }
  fade=useSpring({opacity: this.toggle?1:0})
  componentDidMount(){
    this.setState({...this.state,toggle:true})
  }
  render(){
  return (
    <div className="App">
        
        <Navbar/>
        
        <animated.main  style={this.fade}>  
          <Section className='cake'>
            <div className='wrapper'>
              <h1 className='c-white'>FRESH EVERY DAY</h1>
              <p className='c-white'>Doing our best to put a little 
                    sweetness in your day</p>
                    <a href='#' className='btn c-white'> ORDER NOW</a>
            </div>
          </Section>
          <Section  className='featured'>
            <div className='wrapper'><h1>FEATURED</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
                  <a  href='#' className='btn c-black' >LEARN MORE</a></div>
            
          </Section>
          <Section  className='contact'>
            <div className='wrapper'>
            <h1>NEWS LETTER</h1>
            <p className='c-black'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat
                  <input type='text' placeholder='Email Adress'></input>
                  </p>
           
            <a className='c-white btn' href='#'>SUBSCRIBE</a>
            </div>
          </Section>
        </animated.main>
    </div>
  );
}

}

export default App;
