import React, {useContext} from 'react'
import { ContextApi } from '../../../Cartcontext/CartContext'
import { Box, Typography, Badge,  IconButton, AppBar, Toolbar, } from '@mui/material'
import { Home, ShoppingCart, Menu } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { styles } from './HeaderStyles';

function Header() {
    const context = useContext(ContextApi)

  return (

    <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >
                    <Menu />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    Products
                </Typography>  
                          
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'flex' } }}>   
                    <Link to={`/`}  style={{ textDecoration: 'none', color:'#fff', fontSize:'30px' }}>                 
                        <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                        >                    
                            <Home sx={styles.icons}/>                    
                        </IconButton>   
                    </Link>                
                </Box>
                <Link to={`/cart`} style={{ textDecoration: 'none', color:'#fff', fontSize:'30px' }}>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge  badgeContent={context?.cartList.length} color="error">
                        <ShoppingCart sx={styles.icons}/>
                        </Badge>
                    </IconButton>
                </Link>
               
                </Toolbar>
            </AppBar>   
        </Box>
    </>
    
  )
}

export default Header



