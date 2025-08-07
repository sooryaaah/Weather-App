import React from 'react'
import { MapPinIcon, MagnifyingGlassIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
const UserInterface = () => {
  return (
    <div>
      <nav className='flex justify-between bg-gray-50 border-y-2 border-gray-100'>
        <div className='m-3'>
          <h1 className='text-blue-500 text-3xl font-bold'>WeatherPro</h1>
          <p className='text-gray-500 text-sm'>Global Weather Intelligence</p>
        </div>

        <div className='m-5 flex justify-center gap-4 my-auto mr-10 '>
          <button className='border border-gray-300 rounded-md w-10 h-8 bg-gray-200 hover:bg-blue-400 transition duration-200 ease-in-out cursor-pointer'>☰</button>
          <button className='border border-gray-300 rounded-md w-10 pl-3 h-8 bg-gray-200 hover:bg-blue-400 transition duration-200 ease-in-out cursor-pointer'> <img width="16" height="16" src="https://img.icons8.com/ios/100/settings--v1.png" alt="settings--v1" /></button>
        </div>
      </nav>

      {/* search bar */}

      <div className="flex items-center justify-center">
        <div className="flex  gap-4 w-full max-w-2xl p-4 rounded mt-6 ">

          {/* Input with Icon */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MapPinIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Enter your location"
              className="bg-white w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Search Button */}
          <button className="bg-blue-600 px-5 text-white w-15 rounded hover:bg-blue-500 transition cursor-pointer">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>

          {/* Refresh Button */}
          <button className="bg-gray-200 text-gray-700 p-3 rounded hover:bg-gray-300 transition cursor-pointer">
            <ArrowPathIcon className="h-5 w-5" />
          </button>
        </div>
      </div>


      <section className='p-10' >
        <div className='mx-40 my-10 bg-blue-700 p-20 rounded-lg'>
          <div className='flex flex-col items-center space-y-5'>
            <h1 className='text-6xl font-bold text-white'>25°C</h1>
            <p className='text-2xl text-white'>Scattered Thunderstorms</p>
            <p className='text-white'>New York</p>
          </div>

          <div className='flex justify-evenly gap-8 mt-10 '>
            <div className='bg-blue-400 h-40 w-60 py-12 rounded-lg'>
              <p className='text-center text-sm text-white'>feels like</p>
              <p className='font-semibold text-2xl text-center text-white'>31°C</p>

            </div>
            <div className='bg-blue-400 h-40 w-60 py-12 rounded-lg'>
              <p className='text-center text-sm text-white'>Humidity </p>
              <p className='font-semibold text-2xl text-center text-white'>90.78026667</p>
            </div>
            <div className='bg-blue-400 h-40 w-60 py-12 rounded-lg'>
              <p className='text-center text-sm text-white'>wind spreed </p>
              <p className='font-semibold text-2xl text-center text-white'>12.229873</p>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className='mx-16 bg-white rounded-lg border border-gray-300 '>
          <h1 className='font-semibold text-xl px-10 pt-5'>Weather details</h1>
          <div className='grid grid-cols-3 bg-white gap-5 p-10'>
            <div className='p-5 bg-gray-50 rounded border border-gray-100'>
              <p className='text-center text-sm text-gray-500'>Pressure</p>
              <h1 className='text-center font-bold text-lg'>1024 hPa</h1>
              <p className='text-center text-sm text-gray-500'>high</p>
            </div>

            <div className='p-5 bg-gray-50 rounded border border-gray-100'>
             <p className='text-center text-sm text-gray-500'>Visibility</p>
              <h1 className='text-center font-bold text-lg'>14 km</h1>
              <p className='text-center text-sm text-gray-500'>Excellent</p>
            </div>

            <div className='p-5 bg-gray-50 rounded border border-gray-100'>
             <p className='text-center text-sm text-gray-500'>UV index</p>
              <h1 className='text-center font-bold text-lg'>6</h1>
              <p className='text-center text-sm text-gray-500'>High</p>
            </div>

            <div className='p-5 bg-gray-50 rounded border border-gray-100'>
              <p className='text-center text-sm text-gray-500'>Sunrise</p>
              <h1 className='text-center font-bold text-lg'>06:30</h1>
              <p className='text-center text-sm text-gray-500'>AM</p>
            </div>

            <div className='p-5 bg-gray-50 rounded border border-gray-100'>
             <p className='text-center text-sm text-gray-500'>Sunset</p>
              <h1 className='text-center font-bold text-lg'>18:45</h1>
              <p className='text-center text-sm text-gray-500'>PM</p>
            </div>

            <div className='p-5 bg-gray-50 rounded border border-gray-100'>
             <p className='text-center text-sm text-gray-500'>Wind Direction</p>
              <h1 className='text-center font-bold text-lg'>SW</h1>
              <p className='text-center text-sm text-gray-500'>11 km/h</p>
            </div>

          </div>

          <div className='flex justify-around rounded border border-blue-100 bg-blue-50 p-4 mx-10 mb-8'>
            <div>
              <p className='text-gray-500 text-sm'>Air Quality</p>
              <h1 className='text-center text-lg font-semibold text-blue-400'>Good</h1>
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Comfort level</p>
              <h1 className='text-center text-lg font-semibold text-blue-400'>Humid</h1>
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Weather Trend</p>
              <h1 className='text-center text-lg font-semibold text-blue-400'>Stable</h1>
            </div>
          </div>

        </div>
      </section>

       <footer className="bg-gray-100 text-gray-500 py-8 mt-10">
      <div className="max-w-4xl mx-auto flex justify-center items-center gap-8 text-center">
        <p className="text-sm">🌍 Global Coverage</p>
        <p className="text-sm">⚡ Real-time Updates</p>
        <p className="text-sm">📊 Detailed Analytics</p>
        <p className="text-sm">🎯 Accurate Forecasts</p> 
       
      </div>
      <div>
         <p className=" mt-4 text-center">Professional weather monitoring for informed decisions</p>
      </div>
    </footer>

    </div>
  )
}

export default UserInterface