'use client'

import React from 'react'
import { motion } from 'framer-motion'
import StatCard from '@/Components/StatCard'
import OrdersTable from '@/Components/OrdersTable'
import { Ban, CheckCircle, Clock, ShoppingBag } from 'lucide-react'

const OrderPage = () => {
  return (
    <div className='flex-1 overflow-auto z-10'>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name="Total Orders" icon={ShoppingBag} value="15.265" />
          <StatCard name="Completed Orders" icon={CheckCircle} value="13.250" />
          <StatCard name="Pending Orders" icon={Clock} value="4.250" />
          <StatCard name="Canceled Orders" icon={Ban} value="532" />
        </motion.div>

        <OrdersTable />
      </main>
    </div>
  )
}

export default OrderPage
