import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion'

const COLORS = ['#FBC02D', '#03A9FA', '#EF4444', '#8BC34A'];

const data = [
  { name: "Pending", value: 200 },
  { name: "Prossing", value: 200 },
  { name: "Canceled", value: 150 },
  { name: "Delivered", value: 450 },
];

const OrderDistributionChart = () => {
  return (
    <motion.div
      className='bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] mx-2 md:mx-0'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >

      <h2 className='text-base md:text-lg font-medium mb-4 text-gray-100 text-center md:text-left'>
        Order State Distribution
      </h2>

      <div className='h-64 md:h-80'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart data={data}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={70}
              dataKey="value"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              labelLine={{stroke: "#9ca3af"}}
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
              cursor={{ fill: "rgba(255, 255, 255, 0.1)"}}
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

export default OrderDistributionChart
