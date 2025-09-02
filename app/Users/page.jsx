'use client'

import React from 'react'
import { motion } from 'framer-motion'
import StatCard from '@/Components/StatCard'
import { RotateCcw, UserCheck, UserPlus, UsersIcon } from 'lucide-react'
import UsersTable from '@/Components/UsersTable'


const ClientsPage = () => {
  return (
    <div className='flex-1 overflow-auto z-10'>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name="Total Clients" icon={UsersIcon} value="7.865" />
          <StatCard name="New Clints" icon={UserPlus} value="432" />
          <StatCard name="Active Users" icon={UserCheck} value="4.250" />
          <StatCard name="Returning Clients" icon={RotateCcw} value="2.532" />
        </motion.div>

        <UsersTable />
      </main>
    </div>
  )
}

export default ClientsPage
