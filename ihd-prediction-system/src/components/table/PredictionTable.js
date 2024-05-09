import React from 'react'
import { IoSearch } from 'react-icons/io5'

const fakeData = [
  {
    'Patient ID': '0001',
    'Last Name': 'Thompson',
    'First Name': 'Ava',
    Age: 42,
    Sex: 'Female',
    BMI: 27.5,
    'Blood Pressure': '125/82',
    'Cholesterol Level': 195,
  },
  {
    'Patient ID': '0002',
    'Last Name': 'Wang',
    'First Name': 'Lucas',
    Age: 35,
    Sex: 'Male',
    BMI: 24.3,
    'Blood Pressure': '118/76',
    'Cholesterol Level': 180,
  },
  {
    'Patient ID': '0003',
    'Last Name': 'Lopez',
    'First Name': 'Isabella',
    Age: 29,
    Sex: 'Female',
    BMI: 23.8,
    'Blood Pressure': '110/70',
    'Cholesterol Level': 170,
  },
  {
    'Patient ID': '0004',
    'Last Name': 'Kim',
    'First Name': 'Daniel',
    Age: 48,
    Sex: 'Male',
    BMI: 29.9,
    'Blood Pressure': '135/88',
    'Cholesterol Level': 220,
  },
  {
    'Patient ID': '0005',
    'Last Name': 'Martinez',
    'First Name': 'Sophia',
    Age: 37,
    Sex: 'Female',
    BMI: 26.5,
    'Blood Pressure': '120/78',
    'Cholesterol Level': 200,
  },
  {
    'Patient ID': '0006',
    'Last Name': 'Singh',
    'First Name': 'Aryan',
    Age: 55,
    Sex: 'Male',
    BMI: 31.5,
    'Blood Pressure': '140/92',
    'Cholesterol Level': 240,
  },
]
const PredictionTable = () => {
  return (
    <div className='flex justify-center flex-col gap-4 mt-6 pt-4 pb-8 px-[10rem]'>
      <div className='flex justify-center'>
        <h1 className=' text-4xl text-[#00717A] font-bold uppercase'>
          ISCHEMIC HEART DISEASE PREDICTION
        </h1>
      </div>

      <div className=' bg-[#00717A] rounded-md px-[3rem] py-8'>
        <div className=' flex justify-between items-center py-6'>
          <div className=' relative'>
            <input
              type='text'
              placeholder='Search patient or patient patient ID'
              className=' h-10 px-3 rounded-3xl w-[20rem] focus-visible:outline-0'
            />
            <IoSearch
              className=' absolute right-3 top-3 text-[#d0d0d0]'
              size={20}
            />
          </div>
          <div className='h-10 px-3 rounded-3xl w-[10rem] bg-white flex items-center justify-center gap-1'>
            <span>View By: </span>
            <select className=' focus-visible:outline-0'>
              <option value='Name'>Name</option>
              <option value='Date'>Date</option>
            </select>
          </div>
        </div>
        <table className='w-full overflow-hidden rounded-md'>
          <tr className='bg-[#299FA8] text-white '>
            <th className='font-medium font-sans py-3 '>Patient ID</th>
            <th className='font-medium font-sans py-3'>Last Name</th>
            <th className='font-medium font-sans py-3'>First Name</th>
            <th className='font-medium font-sans py-3'>Age</th>
            <th className='font-medium font-sans py-3'>Sex</th>
            <th className='font-medium font-sans py-3'>BMI</th>
            <th className='font-medium font-sans py-3'>Blood Pressure</th>
            <th className='font-medium font-sans py-3'>Cholesterol Level</th>
          </tr>
          {fakeData.map((data, i) => (
            <tr key={i} className='bg-white text-center font-medium'>
              <td className='font-medium font-sans py-3'>
                {data['Patient ID']}
              </td>
              <td className='font-medium font-sans py-3'>
                {data['Last Name']}
              </td>
              <td className='font-medium font-sans py-3'>
                {data['First Name']}
              </td>
              <td className='font-medium font-sans py-3'>{data.Age}</td>
              <td className='font-medium font-sans py-3'>{data.Sex}</td>
              <td className='font-medium font-sans py-3'>{data.BMI}</td>
              <td className='font-medium font-sans py-3'>
                {data['Blood Pressure']}
              </td>
              <td className='font-medium font-sans'>
                {data['Cholesterol Level']}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  )
}

export default PredictionTable
