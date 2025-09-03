import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion'

const data = [
  { name: 'Smartwatch', sales: 3200, orders: 1800, revenue: 2800 },
  { name: 'Laptop', sales: 5400, orders: 2400, revenue: 6200 },
  { name: 'Tablet', sales: 2100, orders: 1400, revenue: 1900 },
  { name: 'Phone', sales: 7200, orders: 4600, revenue: 6800 },
  { name: 'Camera', sales: 2800, orders: 1600, revenue: 2400 },
];

const ProductPerformanceChart = () => {
  return (
    <motion.div
      className='bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] mx-2 md:mx-0'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className='text-base md:text-lg font-medium mb-4 text-gray-100 text-center md:text-left'>
        Product Performance
      </h2>

      <div className='h-64 md:h-80'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke='#374151' />
            <XAxis dataKey="name" stroke='#9ca3af' tick={{ fontSize: 12 }} />
            <YAxis stroke='#9ca3af' tick={{ fontSize: 12 }} width={50} />
            <Tooltip
              formatter={(value, name) => [`${value}`, name]}
              contentStyle={{
                backgroundColor: "rgba(31,40,55,0.9)",
                borderColor: "#4b5563",
                fontSize: "12px",
                padding: "8px"
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

export default ProductPerformanceChart
