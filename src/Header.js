import React, { useState } from 'react';
import {AppBar, Toolbar, Tabs, Tab, Button, Typography, useMediaQuery, useTheme} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DrawerComp from './DrawerComp';
const PAGES = ['Products', 'Services', 'AboutUs', 'ContactUs'];
const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
      <React.Fragment>
        <AppBar sx={{background: "#063970"}}>
            <Toolbar>
                <EmojiEventsIcon/>
                { isMatch ? (
                        <>
                            <Typography sx={{fontSize: '1.2rem', paddingLeft: '10%'}}>CONTROL PRESUPUESTAL</Typography> {"   "}
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
                                    <Tab key={index} label={page}></Tab>
                                ))
                            }
                        </Tabs>
                        <Button sx={{marginLeft: 'auto'}} variant='contained'>
                            Login{" "}
                        </Button>
                        <Button sx={{marginLeft: '10px'}} variant='contained'>
                            SignUp
                        </Button>
                    </>
                    )
                }

            </Toolbar>
            
        </AppBar>
      </React.Fragment>
    );
  }
  
  export default Header;
  