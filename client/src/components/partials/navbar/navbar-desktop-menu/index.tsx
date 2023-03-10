import React from 'react';
import {
  Box,
  ClickAwayListener,
  useMediaQuery,
  Theme,
  Typography,
  IconButton,
  Menu,
  MenuIcon,
  Container,
  Button,
  Tooltip,
  MenuItem,
  AdbIcon
} from '@mui/material';
import NavbarDesktopLink from './navbar-desktop-link';
import { extendBr, mainLinks, linksGroups } from '../navbar-data';
import NavbarDesktopDropdown from './navbar-desktop-dropdown';

const NavbarDesktopMenu = () => {
  const [openMenuTitle, setOpenMenuTitle] = React.useState<string | false>(false);
  const toggleMenu = (title: string) => setOpenMenuTitle(openMenuTitle === title ? false : title);
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up(extendBr));

  return (
    <Box sx={{
      display: { xs: 'none', [extendBr]: 'flex' },
      alignSelf: 'stretch',
    }}
    >
      <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              alignItems: 'center',
            }}
          >
            ENDOCA
          </Typography>

      {mainLinks.map(({ to, text }) => (
        <NavbarDesktopLink key={to} to={to}>
          {text}
        </NavbarDesktopLink>
      ))}
      <ClickAwayListener onClickAway={() => setOpenMenuTitle(false)}>
        <Box sx={{ display: 'flex' }}>
          {linksGroups.map((linkGroup) => (
            <NavbarDesktopDropdown
              key={linkGroup.title}
              {...linkGroup}
              open={openMenuTitle === linkGroup.title && isDesktop}
              onClick={() => toggleMenu(linkGroup.title)}
            />
          ))}
        </Box>
      </ClickAwayListener>
    </Box>
  );
};

export default NavbarDesktopMenu;
