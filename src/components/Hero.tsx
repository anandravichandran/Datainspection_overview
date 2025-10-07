

"use client";
import React, { useState } from 'react';
import { Spotlight } from './ui/Spotlight'; // Keeping Spotlight since it's being used
import Image from "next/image";
import webfoxhshield from "@/public/webfoxshield.png"

// Sample JSON data
const sampleData = [
  {
    visa: '1234 5678 9012 3456',
    accNo: '00123456789',
    aadhar: '1234 5678 9012',
    pan: 'ABCDE1234F',
  },
  {
    visa: '2345 6789 0123 4567',
    accNo: '00987654321',
    aadhar: '2345 6789 0123',
    pan: 'FGHIJ5678K',
  },
  {
    visa: '2345 6789 0123 4567',
    accNo: '00987654321',
    aadhar: '2345 6789 0123',
    pan: 'FGHIJ5678K',
  },
  // Add more entries as needed
];

const Hero = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="pb-20 pt-36 relative min-h-screen">
      <div>
        {/* Spotlights positioned as before */}
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-20 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background grid */}
      <div className="min-h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      
      {/* Logo - Responsive positioning */}
      <div className="absolute top-0 left-0 p-4 transform md:translate-x-[1px]">
        <Image src={webfoxhshield} alt="Web Fox Shield Logo" className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]" />
      </div>
      
      <div className="flex justify-center relative my-10 flex-col px-4 md:px-0">
        {/* TEXT - Responsive positioning and sizing */}
        <div className="transform md:-translate-y-[50px] md:translate-x-[70px] text-center md:text-left mx-auto md:mx-0 mb-6 md:mb-0">
          <span className="break-words font-['Inter'] text-[16px] md:text-[20px] text-[#FFFFFF]">
            Our system uses advanced threat monitoring to secure your sensitive data, protecting it from unauthorized access and cyber threats.
          </span>
        </div>

        {/* Rounded Square - Responsive sizing and positioning */}
        <div className="bg-[#0D0033] bg-opacity-90 shadow-md rounded-xl p-4 md:p-6 w-full md:w-[800px] h-auto md:h-[250px] mx-auto md:mx-0 md:ml-4 lg:ml-[50px] md:transform md:translate-x-[200px]">
  {/* Long Rounded Rectangular Box with Dropdown Button */}
  <div className="flex flex-col md:flex-row items-center justify-between rounded-full border border-gray-300 dark:border-gray-600 p-3 md:p-4 mb-4 md:transform md:translate-y-[50px]">
    <span className="mb-3 md:mb-0">Get Report</span>
    <button
      onClick={() => setDropdownOpen(!dropdownOpen)}
      className="flex items-center bg-purple-600 text-white rounded-full px-4 py-2 focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 transition-transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>

  {/* Dropdown Box with Dynamic Table - Responsive table container */}
  {dropdownOpen && (
    <div className="bg-gray-100 dark:bg-gray-700 p-2 md:p-4 rounded-lg md:transform md:translate-y-[50px] overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-900 text-left">
            <th className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">Credit Card</th>
            <th className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">Account number</th>
            <th className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">Aadhar</th>
            <th className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">Pan Card</th>
            <th className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">UPI ID</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((data, index) => (
            <tr key={index}>
              <td className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">{data.visa}</td>
              <td className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">{data.accNo}</td>
              <td className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">{data.aadhar}</td>
              <td className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base">{data.pan}</td>
              <td className="p-2 md:p-4 border-b border-gray-300 dark:border-gray-600 text-xs md:text-base"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>
        {/*  */}
      </div>
    </div>
  );
};

export default Hero;