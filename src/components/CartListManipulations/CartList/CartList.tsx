import React, {useContext, useState} from 'react'
import { Box, Grid, Paper, Rating, Stack, Typography,} from '@mui/material'
import { cartListStyling } from './CartListStyling'
import { ContextApi } from '../../../Cartcontext/CartContext'
import Header from '../Header/Header'

interface IState{
  finalPrice: number |false ,
  couponPrice: number | false,
  isTenPerClicked: boolean,
  isFivePerClicked: boolean,
}

function CartList() {
  const contextValues = useContext(ContextApi)

  const cartList = contextValues && contextValues.cartList
  const emptyCartList = cartList && cartList.length === 0
 
  const pricesList = cartList && cartList.map(eachItem => eachItem.price)
  const qntyList = cartList && cartList.map(eachItem => eachItem.quantity)
  const eachItemTotalValue = pricesList && qntyList && pricesList.map((price, index) => price * qntyList[index])
  const productsPrice = cartList &&  cartList.length !== 0 && eachItemTotalValue && eachItemTotalValue.reduce((cur, prev) => cur + prev)
  
  const discountsList = cartList && cartList.map(eachItem => eachItem.discountPercentage)
  const eachItemDiscountValue = pricesList && discountsList && pricesList.map((productsPrice, index) =>Math.round(productsPrice/discountsList[index]))
  const totalDiscount  = cartList &&  cartList.length !== 0 && eachItemDiscountValue && eachItemDiscountValue.reduce((cur, prev) => cur+prev)

  const deliveryFee = 40
  let totalPrice = productsPrice && totalDiscount && (productsPrice - totalDiscount  + deliveryFee)

  // const [finalPrice, setfinalPrice] = useState<IState['finalPrice']>(totalPrice !== undefined && totalPrice && (totalPrice))
  // const [tenCouponPrice, setTenCouponPrice] = useState<IState['couponPrice']>(totalDiscount !== undefined && totalDiscount && (totalDiscount))
  // const [fiveCouponPrice, setFiveCouponPrice] = useState<IState['couponPrice']>(totalDiscount !== undefined && totalDiscount && (totalDiscount))
  const [isTenPerClicked, setIsTenPerClicked] = useState<IState['isTenPerClicked']>(false)
  const [isFivePerClicked, setIsFivePerClicked] = useState<IState['isFivePerClicked']>(false)


  //bugs are there need to work
  const onClickTenPercent = () => {    
    // const couponAmt = 10
    // const appliedPrice = productsPrice && productsPrice/couponAmt
    // totalPrice && appliedPrice && (totalPrice -= appliedPrice)
    // finalPrice && totalPrice !== undefined && totalPrice && setfinalPrice(totalPrice)
    // tenCouponPrice && appliedPrice !== undefined && appliedPrice && totalDiscount !== undefined && totalDiscount && setTenCouponPrice(appliedPrice+totalDiscount) 
    setIsTenPerClicked(true)    
  } 
 
  //bugs are there need to work
  const onClickFivePercent = () => {   
    // const couponAmt = 5
    // const appliedPrice = productsPrice && productsPrice/couponAmt
    // totalPrice && appliedPrice && (totalPrice -= appliedPrice)
    // finalPrice && totalPrice !== undefined && totalPrice && setfinalPrice(totalPrice)
    // fiveCouponPrice && appliedPrice !== undefined && appliedPrice && totalDiscount !== undefined && totalDiscount && setFiveCouponPrice(appliedPrice+totalDiscount) 
    setIsFivePerClicked(true)
  }  


  
  return (
    <>
    <Header/>
    {emptyCartList ? 
      <Box sx={cartListStyling.empty_cartitem_container}>
        <Typography variant='h5'>Missing cart items</Typography>
        <Typography >Add items your cart is empty</Typography>
      </Box>
      :    
      <Box sx={cartListStyling.cartlist_content_container}>
        <Grid container sx={cartListStyling.cartlist_container}>
          {cartList?.map(eachItem => (         
            <Grid item xs={12} sm={6} md={6} lg={6} key={eachItem.id}>   
              <Paper sx={cartListStyling.product_card}>
                <Box sx={cartListStyling.img_qnty_container}>
                  <Box component='img' src={eachItem.thumbnail} alt={eachItem.title} sx={cartListStyling.thumbnail_img} />
                  <Box>
                    <Box sx={cartListStyling.quantity_container}>
                          <Typography>Quantity: </Typography>                     
                          <Box sx={cartListStyling.quantity_inc_dec}>
                            <Box component='button' sx={cartListStyling.minus} onClick={() => contextValues?.handleDecrement(eachItem.id)}>-</Box>
                            <Box>{eachItem.quantity}</Box>
                            <Box component='button' sx={cartListStyling.plus} onClick={() => contextValues?.handleIncrement(eachItem.id)}>+</Box>
                          </Box>  
                    </Box>
                  </Box>
                </Box>
                  
                <Box sx={cartListStyling.content_button_container}>                       
                  <Box sx={cartListStyling.content_container}>
                    <Typography variant='h6' sx={cartListStyling.title}>{eachItem.title}</Typography>
                    <Box sx={cartListStyling.rating_container}>
                      <Stack spacing={1}>
                          <Rating name="half-rating" defaultValue={eachItem.rating} precision={0.5} />
                      </Stack>                            
                    </Box>
                    <Box>                      
                      <Box sx={cartListStyling.price_container}>Price <Typography sx={cartListStyling.price}> &#8377;{eachItem.price}</Typography> </Box>
                      <Box sx={cartListStyling.discount_container}>Discount <Typography sx={cartListStyling.discount}>{eachItem.discountPercentage}%</Typography></Box>
                    </Box>
                  </Box>              
                  <Box sx={cartListStyling.button_container}>
                    <Box component='button' sx={cartListStyling.remove_item} onClick={() => contextValues?.handleRemoveItem(eachItem.id)}>Remove Item</Box>                   
                  </Box>       
                </Box>
              </Paper> 
            </Grid>          
          ))}
        </Grid>
        
        <Grid container sx={cartListStyling.total_prices_container}>
          <Grid item>
          <Paper sx={cartListStyling.price_details_card}>
            <Typography sx={cartListStyling.price_heading} variant='h6'>Price Details</Typography>
            <Box sx={cartListStyling.billing_details_container}>
              <Typography>Price ({cartList && cartList.length} items)</Typography>
              <Typography>&#8377;{productsPrice}</Typography>
            </Box>
            <Box sx={cartListStyling.billing_details_container}>
              <Typography>Discount</Typography>
              <Typography color={'green'}>-&#8377;{totalDiscount}</Typography>
            </Box>          
            <Box sx={cartListStyling.billing_details_container}>
              <Typography>Deliver Charges</Typography>
              <Typography sx={cartListStyling.delivery}>&#8377;40</Typography> 
            </Box>  
            <Typography sx={cartListStyling.price_heading} variant='h6'>Coupons</Typography>
            <Box sx={cartListStyling.billing_details_container}>
              <Typography>10% Extra Discount</Typography>
              {isTenPerClicked ? 
                <Typography color={'green'}>Applied</Typography> 
                : 
                <Box component='button' sx={cartListStyling.apply_button} onClick={onClickTenPercent}>Apply</Box>
              }
            </Box> 
            <Box sx={cartListStyling.billing_details_container}>
              <Typography>5% Extra Discount</Typography>
              {isFivePerClicked ? 
                <Typography color={'green'}>Applied</Typography> 
                :
                <Box component='button' sx={cartListStyling.apply_button} onClick={onClickFivePercent}>Apply</Box> 
              }
              
            </Box>    
            <Box sx={cartListStyling.total_details_container}>
              <Typography variant='h6'>Total Amount</Typography>
              <Typography variant='h6'>&#8377;{totalPrice}</Typography>
            </Box>          
            <Typography sx={cartListStyling.billing_details_container} color={'green'}>You will save &#8377;{totalDiscount} on this order</Typography>
          </Paper>
          </Grid>
        </Grid>
      </Box>
    }
    </>
  )
}

export default CartList