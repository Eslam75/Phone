import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

export default function ProductDetails() {

const [ProductDetails, setProductDetails] = useState(null)


    async function getProductDetails(id){
        let {data}=await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
        setProductDetails(data.data)
    }
    useEffect(()=>{
        getProductDetails()
    },[])

  return (
    <>

    <div className="row py-3">
        <div className="col-md-4"></div>

        <div className="col-md-8"></div>
<h1>{ProductDetails?.title}</h1>
    </div>
    </>
  )
}
