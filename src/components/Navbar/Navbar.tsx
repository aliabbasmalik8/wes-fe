import React from 'react';
import { Box } from '@mui/material';
import NavItem from './NavItem/NavItem';
import { useUser, useLogout } from '../../hooks/user';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { logout } = useLogout();
  const navItems = [
    { label: 'Notes', Icon: DescriptionIcon, path: '/notes' },
    { label: 'Profile', Icon: PersonIcon, path: '/profile' },
  ];

  console.log('===> user', user);
  return (
    <Box className="navbar-wrapper">
      <Box className="navbar">
        {navItems.map((navItem, index) => (
          <NavItem key={index} {...navItem} />
        ))}
        <Button
          variant="contained"
          onClick={async () => {
            await logout();
            navigate(0);
          }}
          className="logout-button"
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
