import React from 'react';
import { useUser } from '../../hooks/user';

const PrivateRoutes: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { user } = useUser();
  if (!user?.id) return <></>;
  return <>{children}</>;
};

export default PrivateRoutes;
