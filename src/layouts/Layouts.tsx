import React from 'react'
import Header from '../components/Header'

type Props = {
  children?: React.ReactNode
}

const Layouts: React.FC<Props> = ({children}) => {
  return (
   <>
    <Header />
     {children}
   </>
  )
}

export default Layouts