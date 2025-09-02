'use client'

import React, { useMemo, useState } from 'react'
import { Edit, Trash2, Search } from "lucide-react";
import Swal from "sweetalert2";
import { motion } from 'framer-motion'
import OrdersData from "../Data/Orders.json"

const OrdersTable = () => {

  const [Orders, setOrders] = useState(OrdersData);
  const [SearchOrder, setSearchOrder] = useState("");
  const [editingOrder, setEditingOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const FilterOrders = useMemo(() => {
    return Orders.filter((order) =>
      order.client.name.toLowerCase().includes(SearchOrder.trim().toLowerCase()) ||
      order.client.email.toLowerCase().includes(SearchOrder.trim().toLowerCase())
    );
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This order will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setOrders(Orders.filter((o) => o.id !== id));
        Swal.fire("Deleted!", "The order has been deleted.", "success");
      }
    });
  };

  const handleEdit = (order) => {
    setEditingOrder(order);
    setShowModal(true);
  };

  const handleSave = () => {
    setOrders(
      Orders.map((order) =>
        order.id === editingOrder.id ? editingOrder : order
      )
    );
    setShowModal(false);
    Swal.fire("Updated!", "The order has been updated successfully.", "success");
  };

  const getStatusClasses = (status) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    const statusClasses = {
      Completed: "bg-green-600 text-white",
      Pending: "bg-orange-500 text-white",
      Cancelled: "bg-red-600 text-white",
    };
    return `${baseClasses} ${statusClasses[status] || "bg-gray-500 text-white"}`;
  };

  const tableHeaders = ["Id", "Client", "Total", "Status", "Date", "Country", "Actions"];

  return (
    <>
      <motion.div
        className='bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] my-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='flex flex-col md:flex-row justify-between items-center mb-6 gap-4 md:gap-0'>
          <h2 className='text-lg md:text-xl font-semibold text-gray-100 text-center md:text-left'>
            Orders List
          </h2>

          <div className='relative w-full md:w-auto'>
            <input
              type="text"
              placeholder='Search orders...'
              onChange={(e) => setSearchOrder(e.target.value)}
              value={SearchOrder}
              className='bg-[#2f2f2f] text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-gray-500 duration-200 text-sm'
            />
            <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
          </div>
        </div>

        <div className="overflow-x-auto ">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                {tableHeaders.map((header) => (
                  <th
                    key={header}
                    className="px-3 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:table-cell"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className='divide-y divide-gray-700'>
              {FilterOrders.map((order) => (
                <motion.tr
                  key={order.id}
                  className="flex flex-col md:table-row mb-4 md:mb-0 border-b md:border-b-0 border-gray-700 md:border-none p-1 md:p-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >

                  <td className=" block md:hidden py-2">
                    <div className="flex flex-col gap-2">

                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <div className=" font-medium text-gray-100">
                            {order.client.name}
                          </div>
                          <div className="text-xs text-gray-300">
                            {order.client.email}
                          </div>
                        </div>

                        <div className="flex space-x-1 -mt-1 -mr-1">
                          <button
                            onClick={() => handleEdit(order)}
                            className="text-blue-500 hover:text-blue-400 cursor-pointer"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(order.id)}
                            className="text-red-500 hover:text-red-400 cursor-pointer"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm text-gray-300 px-1">
                        <span>Total: ${order.total.toFixed(2)}</span>
                        <span className={getStatusClasses(order.status)}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className='hidden md:table-cell px-6 py-4 text-sm text-gray-300'>#{order.id}</td>

                  <td className='hidden md:table-cell px-6 py-4 text-sm text-gray-100'>
                    <div>
                      <div>{order.client.name}</div>
                      <div className='text-xs text-gray-400'>{order.client.email}</div>
                    </div>
                  </td>

                  <td className='hidden md:table-cell px-6 py-4 text-sm text-gray-300'>
                    ${order.total.toFixed(2)}
                  </td>

                  <td className='hidden md:table-cell px-6 py-4 text-sm text-gray-300'>
                    <span className={getStatusClasses(order.status)}>
                      {order.status}
                    </span>
                  </td>

                  <td className='hidden md:table-cell px-6 py-4 text-sm text-gray-300'>
                    {order.date}
                  </td>

                  <td className='hidden md:table-cell px-6 py-4 text-sm text-gray-300'>
                    {order.country}
                  </td>

                  <td className="hidden md:table-cell px-6 py-4 text-sm text-gray-300">
                    <div className='flex gap-2'>
                      <button
                        onClick={() => handleEdit(order)}
                        className="text-blue-500 hover:text-blue-400 cursor-pointer"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="text-red-500 hover:text-red-400 cursor-pointer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

      </motion.div>

      {showModal && editingOrder && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-[#2a2a2a] p-6 rounded-xl w-96 shadow-lg">
            <h2 className="text-lg font-semibold text-white mb-4">Edit Order</h2>

            <input
              type="number"
              value={editingOrder.total}
              onChange={(e) =>
                setEditingOrder({ ...editingOrder, total: parseFloat(e.target.value) })
              }
              className="w-full p-2 mb-3 rounded bg-[#1f1f1f] text-white"
              placeholder="Total"
            />

            <input
              type="text"
              value={editingOrder.status}
              onChange={(e) =>
                setEditingOrder({ ...editingOrder, status: e.target.value })
              }
              className="w-full p-2 mb-3 rounded bg-[#1f1f1f] text-white"
              placeholder="Status"
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-600 rounded-lg text-white hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>


  )
}

export default OrdersTable
