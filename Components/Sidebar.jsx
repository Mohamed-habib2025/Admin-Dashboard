"use client"

import { Bell, DollarSign, House, Info, Mail, Menu, Settings, ShoppingBag, ShoppingCart, Users, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const sidebarItems = [
  { name: "Dashboard", href: "/", icon: <House size={20} /> },
  { name: "Products", href: "/Products", icon: <ShoppingBag size={20} /> },
  { name: "Clints", href: "/Users", icon: <Users size={20} /> },
  { name: "Orders", href: "/Orders", icon: <ShoppingCart size={20} /> },
  { name: "Sales", href: "/sales", icon: <DollarSign size={20} /> },
  { name: "Settings", href: "/settings", icon: <Settings size={20} /> },
  { name: "Messages", href: "/messages", icon: <Mail size={20} /> },
  { name: "Notifications", href: "/notifications", icon: <Bell size={20} /> },
  { name: "Help", href: "/about", icon: <Info size={20} /> },
]

const Sidebar = ({ openSidebar, setOpenSidebar, expandSidebar, setExpandSidebar }) => {
  const pathname = usePathname();

  return (
    <div
      className={`
        fixed lg:static top-0 left-0 h-full bg-[#1e1e1e] backdrop-blur-md p-4 flex flex-col border-r border-[#2f2f2f]
        transition-all duration-300 z-50
        ${openSidebar ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 w-72
        ${expandSidebar ? "lg:w-64" : "lg:w-20"}
      `}
    >
      <button
        onClick={() => setOpenSidebar(false)}
        className="lg:hidden p-2 mb-4 text-gray-300 hover:text-white"
      >
        <X size={24} />
      </button>

      <button
        onClick={() => setExpandSidebar(!expandSidebar)}
        className="hidden lg:block p-2 mb-4 text-gray-300 hover:text-white hover:cursor-pointer"
      >
        <Menu size={24} />
      </button>

      <nav className="mt-4 flex-grow">
        {sidebarItems.map((item) => (
          <Link key={item.name} href={item.href} onClick={() => setOpenSidebar(false)}>
            <div
              className={`
                flex items-center p-3 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors mb-2
                ${pathname === item.href ? "bg-[#2f2f2f]" : ""}
              `}
            >
              {item.icon}
              {expandSidebar && (
                <span className="ml-4 whitespace-nowrap">{item.name}</span>
              )}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
