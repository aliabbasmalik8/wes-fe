import React from 'react'
import { useUser } from '../../hooks/user'

const PublicRoutes: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { user } = useUser()
    if(user?.id) return <></>
    return <>{children}</>
}

export default PublicRoutes