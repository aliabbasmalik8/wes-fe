import React from 'react'
import Page from '../../components/Page/Page'
import { useUser } from '../../hooks/user'

import "./dashboard.scss"

const Dashboard = () => {
  const { user } = useUser()
  return (
    <Page className="wrapper">
        Welcome {user?.firstName}!
    </Page>
  )
}

export default Dashboard