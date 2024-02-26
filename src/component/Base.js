import React from 'react'
import Navar from './Navar'
import Footer from './Footer'

const Base = ({title='Welcome to Digital Whopper',children}) => {
  return (
    <div>
        <Navar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Base