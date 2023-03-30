import { Footer } from '@/components/footer'
import Header from '@/components/header'
import {ProductDetail} from '@/components/ProductDetail'
import React from 'react'

export default function product() {
  return (
    <div>
          <Header />
          <ProductDetail />
          <Footer/>
    </div>
  )
}
