import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { INavItemProps } from '../../../types/components'

import "./navitem.scss"

const NavItem: React.FC<INavItemProps> = ({ Icon, label, path }) => {
  const navigate = useNavigate()

  const handleNavigate = () => navigate(path)

  return (
    <Box onClick={handleNavigate} className="nav-item-wrapper">
        <Box className="icon">{<Icon />}</Box>
        <Box className="text">{label}</Box>
    </Box>
  )
}

export default NavItem