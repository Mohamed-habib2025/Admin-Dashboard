import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion'

const data = [
  { name: 'Smartwatch', sales: 5000, orders: 2800, revenue: 2500 },
  { name: 'Laptop', sales: 4500, orders: 2500, revenue: 3400 },
  { name: 'Tablet', sales: 2000, orders: 8500, revenue: 2290 },
  { name: 'Phone', sales: 3000, orders: 5980, revenue: 2210 },
  { name: 'Camera', sales: 2390, orders: 7500, revenue: 2500 },
];

const ProductPerformaneChart = () => {

  return (
    <motion.div
      className='bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] mx-2 md:mx-0'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >

      <h2 className='text-base md:text-lg font-medium mb-4 text-gray-100 text-center md:text-left'>
        Product Performane
      </h2>

      <div className='h-64 md:h-80'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke='#374151' />
            <XAxis
              dataKey="name"
              stroke='#9ca3af'
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
            />
            <YAxis stroke='#9ca3af' tick={{ fontSize: 12 }} width={40} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,40,55,,0.8)",
                borderColor: "#4b5563",
                fontSize: "12px",
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="sales" fill='#ff7043' radius={[4, 4, 0, 0]} barSize={20} />
            <Bar dataKey="orders" fill='#29b6f6' radius={[4, 4, 0, 0]} barSize={20} />
            <Bar dataKey="revenue" fill='#66bb6a' radius={[4, 4, 0, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </motion.div>
  )
}

export default ProductPerformaneChart
