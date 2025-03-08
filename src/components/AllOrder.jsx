import React from 'react'

function AllOrder() {
  return (
    <div className='w-full mt-5'>
        <h1 className='text-2xl font-bold mb-5'>All Orders</h1>
        <table className='w-full text-left'>
            <tr className='border-2 h-15'>
                <th className='pl-5'>Order ID</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Total Amount</th>
                <th>Action</th>
            </tr>
            <tr className='border-1 h-10 '>
                <td className='pl-5'>1</td>
                <td>2022-05-01</td>
                <td>Pending</td>
                <td>1000</td>
                <td><button>Cancel</button></td>
            </tr>
            <tr className='border-1 h-10'>
                <td className='pl-5'>2</td>
                <td>2022-05-02</td>
                <td>Pending</td>
                <td>2000</td>
                <td><button>Cancel</button></td>
            </tr>
        </table>
    </div>
  )
}

export default AllOrder