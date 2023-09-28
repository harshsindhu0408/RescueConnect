import React from 'react'

export default function ResoruceItem({ resource }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-3">
      <h3 className="text-xl font-semibold text-indigo-700 mb-2">{resource.name}</h3>
      <div className="mb-2">
        <p className="text-gray-600">Status: {resource.status}</p>
        <p className="text-gray-600">Quantity: {resource.quantity}</p>
        <p className={`text-${resource.availability ? 'green-500' : 'red-500'}`}>
          Availability: {resource.availability ? 'Available' : 'Not Available'}
        </p>
        {/* Add additional resource properties here */}
      </div>
    </div>
  );
}
