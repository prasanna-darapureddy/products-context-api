export const styles = {
    home_container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding:'20px',
    },
    header_container:{
        display:'flex',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
    },
    input_container:{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
        marginBottom: '30px',
    },
    input:{
        width:'300px',
    },
    cart_icon:{
        fontSize:' 40px',
        color: '#000',
    },
    empty_user_container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        height: '70vh',
    },
    products_container:{
        padding:'20px',
    },

    product_card:{
        width:'250px',
        minHeight: '420px',
        maxHeight:'500px',
        marginBottom: '30px',
    },

    thumbnail_img:{
        height: '200px',
        width: '100%',
    },    
    content_container:{
        display:'flex',
        flexDirection: 'column',
        padding: '10px'
    },
    title:{
        color: '#000'
    },
    rating_container:{
        display: 'flex',
        alignItems: 'center',   
        marginTop: '15px'     
    },
   
    rating:{
        backgroundColor: 'green',
        color: '#fff',
        width: '40px',
        marginRight: '10px',
        textAlign: 'center',
    },
    star:{
        fontSize: '15px',
        marginLeft: '5px',  
    },
    price_container:{
        display: 'flex',
        alignItems: 'center',
        marginTop: '15px'
    },
    price:{
        marginLeft: '10px',
        fontWeight: 700,
    },
    discount_container:{
        display: 'flex',
        alignItems: 'center',
        marginTop: '15px'
    },
    discount:{
        marginLeft: '10px',
        fontWeight: 700,
    },
    add_to_cart:{
        backgroundColor:'transparent',
        outline: 'none',
        border:'1px solid #808080',
        borderRadius: '8px',
        padding: '8px',
        marginTop:'15px',
        color:'green',
        fontWeight: 600,
        cursor: 'pointer',
    },

    quantity_container:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop: '10px',
        
    },

    quantity_inc_dec:{
        fontWeight: 600,
        fontSize: '28px',
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: '20px',
    },

    remove_item:{
        backgroundColor:'transparent',
        outline: 'none',
        border:'1px solid #808080',
        borderRadius: '8px',
        padding: '8px',
        marginTop:'15px',
        color:'green',
        fontWeight: 600,
        cursor: 'pointer',
    },

    minus:{
        marginRight: '10px',
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
        backgroundColor: 'green',
        color:'#fff',
    },

   plus:{
        marginLeft: '10px',
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
        backgroundColor: 'green',
        color:'#fff',
    },

}















































//     const handleCartItem = (id: number) => {
        // const productItem = productsList.find(eachProduct=>eachProduct.id === id)    
        // const cartItem = cartList.find(eachItem => eachItem.id === id)        
        
        // if(productItem !== undefined){
        //     if(productItem.id === cartItem?.id){
        //         setQuantity(quantity + 1)
        //     }else{
        //         setCartList([...cartList, {...productItem, quantity}])
        //     }
        // }
//     }

//     const handleIncrement = (id: number) => {
//         const cartItem = cartList.find(eachItem => eachItem.id === id)
//         if(cartItem?.quantity !== undefined){
//             setQuantity(cartItem?.quantity + 1)
//         }       
        
//     }

//     const handleDecrement = (id: number) => {
//         if(quantity === 1){
//             const updatedCartList = cartList.filter(eachItem => eachItem.id !== id)
//             setCartList(updatedCartList)
//         }else{
//             const cartItem = cartList.find(eachItem => eachItem.id === id)
//             if(cartItem?.quantity !== undefined){
//                 setQuantity(cartItem?.quantity - 1)
//             }   
//         }
//     }
