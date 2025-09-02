"use client"
import React, { useState } from 'react'
import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";

const Base = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [expandSidebar, setExpandSidebar] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        expandSidebar={expandSidebar}
        setExpandSidebar={setExpandSidebar}
      />

      <div className="flex flex-col flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto w-full">
          <Header setOpenSidebar={setOpenSidebar} />
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}

export default Base
