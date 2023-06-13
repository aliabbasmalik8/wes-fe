import { Box } from '@mui/material'
import classNames from 'classnames'
import React from 'react'
import { IPageProps } from '../../types/components'
import Navbar from '../Navbar/Navbar'

import "./page.scss"

const Page: React.FC<IPageProps> = ({ children, className, showNavbar = true }) => {
  return (
    <Box className={classNames(
      "page-wrapper",
      className
    )}>
      {showNavbar ? <Navbar /> : <></>}
      {children}
    </Box>
  )
}

export default Page