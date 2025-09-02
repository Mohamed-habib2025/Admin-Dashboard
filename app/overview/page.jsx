"use client"

import React from 'react'
import StatCard from '@/Components/StatCard'
import { DollarSign, ShoppingBag, SquareActivity, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import SalesOverviewChart from '@/Components/SalesOverviewChart'
import CategoryDistributionCart from '@/Components/CategoryDistributionCart'
import OrderDistributionChart from '@/Components/OrderDistributionChart'
import ProductPerformaneChart from '@/Components/ProductPerformaneChart'

const OverviewPage = () => {
  return (
    <div className=' flex-1 overflow-auto relative z-10'>
      <main className='max-w-7xl mx-auto py-4 px-4 lg:px-8'>
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{opacity:0 , y:20}}
          animate={{opacity:1 , y:0}}
          transition={{duration:1}}
        >
          <StatCard name="Total Sales" icon={DollarSign} value="$180.450" />
          <StatCard name="Total Clients" icon={Users} value="1.432" />
          <StatCard name="Total Products" icon={ShoppingBag} value="650" />
          <StatCard name="Stock" icon={SquareActivity} value="12.500" />
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesOverviewChart />
          <CategoryDistributionCart />
          <OrderDistributionChart />
          <ProductPerformaneChart />
        </div>

      </main>
    </div>
  )
}

export default OverviewPage
