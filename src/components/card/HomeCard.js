import React from 'react'
import Card from 'react-bootstrap/Card';
import './HomeCard.css'

const HomeCard = ({children}) => {
  return (
    <>
      <Card className='Choose-Cards' style={{ width: '25rem' }}>
        {children}
      </Card>
    </>
  )
}

export default HomeCard
