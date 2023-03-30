import { Footer } from '@/components/footer'
import Header from '@/components/header'
import { OrderDetails } from '@/components/orders'
import React from 'react'

export default function orders() {
  return (
      <div>
          <Header/>
          <OrderDetails/>
      <Footer/>
    </div>
  )
}
