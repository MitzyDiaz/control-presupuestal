import React, { useState } from 'react';
import logo from '../logo-sen.svg';
import { PAGES } from '../data/PAGES.js';
import {AppBar, Toolbar, Tabs, Tab, Typography, useMediaQuery, useTheme, Button} from '@mui/material';
import DrawerComp from '../DrawerComp';
import { Link } from "react-router-dom";

export const Header = () => {
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const name = 'Control Presupuestal';

    return <React.Fragment>
        <AppBar sx={{background: "#063970"}}>
            <Toolbar>
                <img src={logo} className="App-logo" alt="logo" />
                <Link to={'/'}><Typography className='App-Name' sx={{fontSize: '1rem', paddingLeft: '5px'}}>{name}</Typography> {"   "}</Link>
                { isMatch ? (
                        <>
                            <DrawerComp/>
                        </>
                    ) :
                    (
                    <>
                        <Tabs 
                        textColor="inherit" 
                        value={value} 
                        onChange={(e, value)=> setValue(value)} 
                        indicatorColor='secondary'
                        >
                            {
                                PAGES.map((page,index) =>(
                                    /*<Link to={"/" + page}><Tab key={index} label={page}></Tab></Link>*/
                                    <Tab key={index} label={page}></Tab>
                                ))
                            }
                        </Tabs>
                        <Link to={"/login"}>
                            <Button sx={{marginLeft: 'auto'}} variant='contained'>
                                Login{" "}
                            </Button>
                        </Link>
                    </>
                    )
                }

            </Toolbar>
            
        </AppBar>
      </React.Fragment>
  };
  