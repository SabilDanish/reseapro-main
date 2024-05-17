import React from 'react'
import './BannerButton.css'
import { useNavigate } from 'react-router-dom'

const BannerButtons = ({title,path}) => {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate(path)
  }
  return (
      <button className="custom-button" onClick={handleNavigation}>{title}</button>
  )
}

export default BannerButtons
