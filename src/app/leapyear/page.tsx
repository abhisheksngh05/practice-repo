"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type FormData = {
  year: string;

};
 

export default function LeapYear() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    year: '',

  });


  const checkLeapYear = (year: number) => {
    if (year % 4 == 0) {
      if (year % 100 == 0) {
        if (year % 400 == 0) {
          console.log(`leap year`);
        } else {
          console.log(`Not a leap year`);
        }
      } else {
        console.log(`leap year`)
      }
    } else {
      console.log(`Not a leap year`)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.year) {
      alert("Please fill out all fields.");
      return;
    }

    checkLeapYear(+formData.year)

    console.log('Form Submitted:', formData)
    setFormData({
      year: '',

    });
  };

  const handleNavigation = () => {
    router.back();
  };




  return (

    <div className="bg-gray-200 border-4 border-blue-200 p-4 max-w-4xl mx-auto mt-10">
      <h1 className="text-black font-bold text-center mb-4">Leap Year Check</h1>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
        <div className="w-full flex gap-4">
          <div className="w-1/2 text-center">
            <label htmlFor="year" className="block text-sm font-medium text-black">Year</label>
            <input type="text" name="year" value={formData.year} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg text-black-900"
              placeholder="Year" required />
          </div>
        </div>

        <div className="w-full text-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Check Leap Year
          </button>
        </div>
      </form>
    </div>
  );
}
