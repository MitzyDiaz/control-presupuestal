import React  from 'react';
import logo from '../img/logo-sen.svg';
import { DATA, settings } from '../data/DATA.js';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme, Button, MenuItem, Tooltip, Menu, IconButton, Box, Avatar, Container } from '@mui/material';
//import MenuIcon from '@mui/icons-material/Menu';
import DrawerComp from '../DrawerComp';
//import { Link } from "react-router-dom";

export const Header = () => {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const name = 'Control Presupuestal';
    // eslint-disable-next-line
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: 'white',
                color: 'black'
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    return <AppBar position="static" sx={{ background: "#063970" }}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <img src={logo} className="App-logo" alt="logo" />
                <Typography
                    className='App-Name'
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { md: 'flex' },
                        fontFamily: 'Roboto',
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                        paddingLeft: '5px'
                    }}
                >
                    {name}
                </Typography>

                {isMatch ? (
                    <>
                        <DrawerComp />
                    </>
                ) :
                    (
                        <>

                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {DATA.map((page, index) => (
                                    <Button
                                        key={index}
                                        label={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                        </>)
                }
                <Box sx={{ flexGrow: 0, marginLeft: 'auto' }}>
                    <Tooltip title="Open settings" >
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" {...stringAvatar('Mitzy Diaz')} />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

            </Toolbar>
        </Container>
    </AppBar>
        ;




};
