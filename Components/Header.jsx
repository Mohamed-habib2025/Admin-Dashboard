import Image from 'next/image'
import React from 'react'
import uk from "../public/images/uk.png"
import admin from "../public/images/admin.png"
import { Bell, Menu } from 'lucide-react'

const Header = ({ setOpenSidebar }) => {
  return (
    <header className='bg-[#1e1e1e] shadow-lg border-b border-[#1f1f1f] mx-4 sm:mx-4 lg:mx-8 mt-4 mb-2 rounded-lg'>
      <div className='max-w-7xl mx-auto py-4 px-2 sm:px-6 flex items-center justify-between'>
        <div className='flex items-center gap-1'>
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setOpenSidebar(true)}
          >
            <Menu size={24} />
          </button>

          <h1 className='text-lg sm:text-xl lg:text-2xl font-semibold text-gray-100'>Dashboard</h1>
        </div>

        <div className='flex items-center space-x-3 sm:space-x-6'>
          <Image
            src={uk}
            alt='country flag'
            width={25} height={18}
            className='rounded-full shadow-md cursor-pointer'
          />

          <div className='relative'>
            <Bell className='w-5 sm:w-6 h-5 sm:h-6 text-gray-300 cursor-pointer hover:text-white ' />
          </div>

          <div className='flex items-center space-x-2 sm:space-x-3'>
            <Image
              src={admin}
              alt='admin'
              width={35} height={35}
            />
          </div>

          <span className='hidden sm:block text-gray-100 font-medium'>Habib</span>
        </div>
      </div>
    </header>
  )
}

export default Header
