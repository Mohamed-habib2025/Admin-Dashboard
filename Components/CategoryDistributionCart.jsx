'use client'

import React, { useEffect, useState } from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data = [
  { name: "Electronics", value: 400 },
  { name: "Fashion", value: 300 },
  { name: "Groceries", value: 200 },
  { name: "Books", value: 100 },
];

const CategoryDistributionCart = () => {

  const [smallermdscreen, setsmallermdscreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setsmallermdscreen(window.innerWidth <= 768)
    }

    updateScreenSize()
    window.addEventListener("resize", updateScreenSize)
    return () => window.removeEventListener("resize", updateScreenSize)
  }, [])

  const outerRadius = smallermdscreen ? 60 : 80

  return (
    <motion.div
      className='bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] mx-2 md:mx-0'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >

      <h2 className='text-base md:text-lg font-medium mb-4 text-gray-100 text-center md:text-left'>
        Category Distribution
      </h2>

      <div className='h-64 md:h-80'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart data={data}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={outerRadius}
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,40,55,,0.8)",
                borderColor: "#4b5563",
                fontSize: "12px",
                padding: "8px"
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend
              iconType='circle'
              layout='horizontal'
              align='center'
              wrapperStyle={{ fontSize: 12 }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default CategoryDistributionCart
