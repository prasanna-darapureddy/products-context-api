import { Box, FormControl, Grid, InputLabel, MenuItem, Paper, Rating, Select, Stack, Typography, } from '@mui/material'
import React, {useContext} from 'react'
import { ContextApi } from '../../../Cartcontext/CartContext'
import { styles } from './ProductsStyles'
import Header from '../Header/Header'


function Products() {
    const context = useContext(ContextApi)
    const isUserSelected = context?.userName === ''   

  return (
    <>
        <Header/>
        <Box sx={styles.input_container}>
            <FormControl sx={styles.input} >
                <InputLabel id="demo-simple-select-label">Users</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="User"
                    placeholder='Select User'
                    onChange={(event: { target: { value: any } }) => context?.setUserName(event.target.value)}
                >
                    <MenuItem value='user_1'>User_1</MenuItem>
                    <MenuItem value='user_2'>User_2</MenuItem>
                    <MenuItem value='user_3'>User_3</MenuItem>
                </Select>
            </FormControl>   
        </Box>
        <Box sx={styles.home_container}>            
            {isUserSelected ?           
            <Box sx={styles.empty_user_container}>
                <Typography variant='h5'>Please Select User</Typography>
            </Box>            
            : 
            <Grid container sx={styles.products_container}>
                {context?.productsList.map(eachProduct => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={eachProduct.id}>
                        <Paper sx={styles.product_card}>
                            <Box component='img' src={eachProduct.thumbnail} alt={eachProduct.title} sx={styles.thumbnail_img} />
                            <Box sx={styles.content_container}>                       
                                <Typography variant='h6' sx={styles.title}>{eachProduct.title}</Typography>
                                <Box sx={styles.rating_container}>
                                    <Stack spacing={1}>
                                        <Rating name="half-rating" defaultValue={eachProduct.rating} precision={0.5} readOnly/>
                                    </Stack>
                                </Box>
                                <Box>
                                    <Box sx={styles.price_container}>Price <Typography sx={styles.price}>  &#8377;{eachProduct.price}</Typography> </Box>
                                    <Box sx={styles.discount_container}>Discount <Typography sx={styles.discount}>{eachProduct.discountPercentage}%</Typography></Box>
                                </Box>  
                                
                                { context.cartList.find(eachItem => eachItem.id === eachProduct.id && context.isAdded) ? 
                                    <Box sx={styles.quantity_inc_dec}>
                                        <Box component='button' sx={styles.minus} onClick={() => context?.handleDecrement(eachProduct.id)}>-</Box>
                                        <Box>{context?.cartList.find(eachItem => eachItem.id === eachProduct.id)?.quantity}</Box>
                                        <Box component='button' sx={styles.plus} onClick={() => context?.handleIncrement(eachProduct.id)}>+</Box>
                                    </Box>
                                    :
                                    <Box component='button' sx={styles.add_to_cart} onClick={() => context?.handleCartItem(eachProduct.id)} >Add to cart</Box>                   
                                } 
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            }

        </Box>
    </>
  )
}

export default Products