import React from 'react'
import ImageGallery from './ImageGallery'
import ProductDetails from './ProductDetails'

export default function FixedLayout() {
  return (
   
    <div className="w-full flex flex-col md:flex-row max-w-[1440px]  mx-auto px-[20px] py-[30px]  md:px-[60px]">
    <ImageGallery/>
    <ProductDetails/>

    </div>
  )
}
