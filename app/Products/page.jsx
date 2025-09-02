'use client'

import React from 'react'
import { motion } from 'framer-motion'
import StatCard from '@/Components/StatCard'
import { DollarSign, ShoppingBag, SquareActivity } from 'lucide-react'
import ProductsTable from '@/Components/ProductsTable'

const ProductsPage = () => {
  return (
    <div className='flex-1 overflow-auto z-10'>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StatCard name="Total Products" icon={ShoppingBag} value="4.850" />
          <StatCard name="Total Stock" icon={SquareActivity} value="18.432" />
          <StatCard name="Total Sold" icon={DollarSign} value="6.650" />
          <StatCard name="Stock" icon={SquareActivity} value="$12.500" />
        </motion.div>

        <ProductsTable />
      </main>
    </div>
  )
}

export default ProductsPage
