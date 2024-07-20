export const cartListStyling={
    cartlist_content_container:{
        display: 'flex',
        padding:'20px',
        width:'95%',
        alignItems:'flex-center',
    },
    cartlist_container:{
        width: '75%',
        padding:'40px',
    },
    empty_cartitem_container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        height: '90vh',
    },
    product_card:{
        marginRight:'30px',
        marginBottom:'30px',
        minWidth:'350px',
        display: 'flex',
    },

    img_qnty_container:{
        width:'200px',
    },

    button_container:{
        alignSelf:'flex-end',
        width:'100%',
    },

    thumbnail_img:{
        height: '200px',
        width: '100%',
    },    

    content_button_container:{
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:'15px',
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
        width: '60px',
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

    quantity_container:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop: '10px',
        padding:'10px',
    },

    quantity_inc_dec:{
        fontWeight: 600,
        fontSize: '28px',
        display: 'flex',
        alignItems: 'center',
    },

    remove_item:{
        backgroundColor:'transparent',
        outline: 'none',
        border:'1px solid #808080',
        borderRadius: '8px',
        padding: '8px',
        color:'green',
        fontWeight: 600,
        cursor: 'pointer',
        
    },

    minus:{
        marginRight: '10px',
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
    },

   plus:{
        marginLeft: '10px',
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
    },

    total_prices_container:{
        width:'25%',
        paddingTop:'40px',
    },
    price_details_card:{
        minWidth:'100%',
    },
    price_heading:{
        padding: '10px 20px',
        borderBottom: '1px solid #c8c8c8',
    },

    billing_details_container:{
        display: 'flex',
        justifyContent:'space-between',
        padding: '10px 20px',
        fontWeight:600,
    },

    total_details_container:{
        display: 'flex',
        justifyContent:'space-between',
        padding: '10px 20px',
        borderTop: '1px dashed #c8c8c8',
        borderBottom:'1px dashed #c8c8c8',
        marginTop:'30px',
        marginBottom:'30px',
    },

    delivery:{
        color:'green',
    },

    apply_button:{
        borderRadius: '4px',
        border: '1px solid green',
        backgroundColor:'transparent',
        outline: 'none',
        color:'green',
        cursor:'pointer',
    }
  
}