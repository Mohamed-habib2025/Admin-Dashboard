'use client'

import React, { useMemo, useState } from 'react'
import { Edit, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import UsersData from "../Data/Clients.json"
import Image from 'next/image';

const UsersTable = () => {

  const [Users, setUsers] = useState(UsersData);
  const [SearchUser, setSearchUser] = useState("");
  const [editingUser, seteditingUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const FilterUser = useMemo(() => {
    return Users.filter((user) =>
      user.name.toLowerCase().includes(SearchUser.trim().toLowerCase())
      || user.username.toLowerCase().includes(SearchUser.trim().toLowerCase())
    );
  })

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setProducts(Users.filter((p) => p.id !== id));
        Swal.fire("Deleted!", "The Client has been deleted successfully.", "success");
      }
    });
  };


  const handleEdit = (user) => {
    seteditingUser(user);
    setShowModal(true);
  };

  const handleSave = () => {
    setUsers(
      Users.map((user) =>
        user.id === editingUser.id ? editingUser : user
      )
    );
    setShowModal(false);
    Swal.fire("Updated!", "The Client has been updated successfully.", "success");
  };

  const tableHeaders = [
    "Name",
    "email",
    "phone numbers",
    "country",
    "Actions",
  ];


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
            Clients
          </h2>

          <div className=' relative w-full md:w-auto'>
            <input
              type="text"
              placeholder='Search user...'
              onChange={(e) => setSearchUser(e.target.value)}
              value={SearchUser}
              className='bg-[#2f2f2f] text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-gray-500 duration-200 text-sm'
            />
            <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
          </div>
        </div>

        <div className="overflow-x-auto ">
          <table className="min-w-full divide-y divide-gray-700">
            <thead >
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
              {FilterUser.map((user) => (
                <motion.tr
                  key={user.id}
                  className=" flex flex-col md:table-row mb-4 md:mb-0 border-b md:border-b-0 border-gray-700 md:border-none p-1 md:p-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <td className="md:hidden py-2">
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <Image src={user.image}
                          alt={user.name}
                          width={36}
                          height={36}
                          className=" h-9 w-9 rounded-full"
                        />
                        <div className='flex flex-col '>
                          <div className='text-sm font-medium text-gray-100'>
                            {user.name}
                          </div>
                          <div className='mt-2 text-xs text-gray-300'>
                            {user.email}
                          </div>
                        </div>
                      </div>

                      <div className=' flex space-x-1 -mt-1 -mr-1'>
                        <button
                          onClick={() => handleEdit(user)}
                          className="text-blue-500 hover:text-blue-400 cursor-pointer"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="text-red-500 hover:text-red-400 cursor-pointer"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </td>

                  <td className='hidden md:table-cell px-6 py-4 whitespace-normal text-sm font-medium text-gray-100'>
                    <div className='flex items-center'>
                      <Image src={user.image}
                        alt={user.name}
                        width={40}
                        height={40}
                        className=" h-10 w-10 rounded-full"
                      />
                      <div className='ml-4'>
                        {user.name}
                      </div>
                    </div>
                  </td>

                  <td className='hidden md:table-cell px-6 py-4 whitespace-normal text-sm font-medium text-gray-300'>
                    {user.email}
                  </td>

                  <td className='hidden md:table-cell px-6 py-4 whitespace-normal text-sm font-medium text-gray-300'>
                    {user.phone}
                  </td>

                  <td className='hidden md:table-cell px-6 py-4 whitespace-normal text-sm font-medium text-gray-300'>
                    {user.address.city}
                  </td>

                  <td className="hidden md:table-cell px-6 py-4 whitespace-normal text-sm font-medium text-gray-300">
                    <div className='flex gap-1'>
                      <button
                        onClick={() => handleEdit(user)}
                        className="text-blue-500 hover:text-blue-400 cursor-pointer"
                      >
                        <Edit size={16} />
                      </button>

                      <button
                        onClick={() => handleDelete(user.id)}
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

      {showModal && editingUser && (
        <div className=" fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-[#2a2a2a] p-6 rounded-xl w-96 shadow-lg">
            <h2 className="text-lg font-semibold text-white mb-4">Edit Client</h2>

            <input
              type="text"
              value={editingUser.name}
              onChange={(e) =>
                seteditingUser({ ...editingUser, name: e.target.value })
              }
              className="w-full p-2 mb-3 rounded bg-[#1f1f1f] text-white"
              placeholder="Name"
            />
            <input
              type="number"
              value={editingUser.phone}
              onChange={(e) =>
                seteditingUser({ ...editingUser, phone: e.target.value })
              }
              className="w-full p-2 mb-3 rounded bg-[#1f1f1f] text-white"
              placeholder="Phone Number"
            />
            <input
              type="text"
              value={editingUser.username}
              onChange={(e) =>
                seteditingUser({ ...editingUser, username: e.target.value })
              }
              className="w-full p-2 mb-3 rounded bg-[#1f1f1f] text-white"
              placeholder="user name"
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

export default UsersTable
