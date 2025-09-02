import React from 'react'

const StatCard = ({name , icon:Icon , value}) => {
  return (
    <div className='bg-[#1e1e1e] backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-[#1f1f1f] hover:-translate-y-1.5 duration-300'>
      <div className='px-4 py-5 sm:p-5'>
        <span className='flex items-center text-sm font-medium text-gray-300'>
          <Icon size={20} className='mr-2' />
          {name}
        </span>
        <p className='mt-1 text-3xl font-semibold text-white'>{value}</p>
      </div>
    </div>
  )
}

export default StatCard
