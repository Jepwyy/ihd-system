import React from 'react'

const PredictionForm = () => {
  return (
    <div className='flex justify-center flex-col gap-4 mt-6 pt-4 pb-8 px-[10rem]'>
      <div className='flex justify-center'>
        <h1 className=' text-4xl text-[#00717A] font-bold uppercase'>
          ISCHEMIC HEART DISEASE PREDICTION
        </h1>
      </div>
      <div className='bg-gradient-to-r from-[#2DB4C0] to-[#145459] p-2 rounded-md text-end px-[3rem]'>
        <span className=' text-white font-medium text-2xl'>
          Prediction for Patient 0001
        </span>
      </div>
      <div className=' bg-[#00717A] rounded-md px-[3rem] py-8'>
        <span className='text-white font-bold text-2xl'>
          Enter Attributes for Prediction
        </span>
        <hr className=' bg-white h-[.10rem] my-2' />
        <form className='mt-6 px-8 grid grid-cols-12 gap-3'>
          <div className=' col-span-6 flex flex-col'>
            <label className=' text-white font-semibold text-xl ms-3'>
              Last Name:
            </label>
            <input type='text' className='bg-white h-10 rounded-md' />
          </div>
          <div className=' col-span-6 flex flex-col'>
            <label className=' text-white font-semibold text-xl ms-3'>
              First Name:
            </label>
            <input type='text' className='bg-white h-10 rounded-md' />
          </div>
          <div className=' col-span-1 flex flex-col'>
            <label className=' text-white font-semibold text-xl ms-3'>
              Age:
            </label>
            <input type='number' className='bg-white h-10 rounded-md' />
          </div>
          <div className=' col-span-2 flex flex-col'>
            <label className=' text-white font-semibold text-xl ms-3'>
              Sex:
            </label>

            <select className='bg-white h-10 rounded-md'>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </div>
          <div className=' col-span-1    flex flex-col'>
            <label className=' text-white font-semibold text-xl ms-3'>
              BMI:
            </label>
            <input type='number' className='bg-white h-10 rounded-md' />
          </div>
          <div className=' col-span-8 flex flex-col'>
            <label className=' text-white font-semibold text-xl ms-3'>
              Patient’s Blood Pressure:
            </label>
            <div className='flex w-full gap-2'>
              <input type='text' className='bg-white h-10 rounded-md w-full' />
              <div className='bg-[#15545A] text-white px-6 flex items-end pb-2  text-xs rounded-md'>
                <span>mmHg</span>
              </div>
            </div>
          </div>
          <div className=' col-span-7 flex flex-col'>
            <label className=' text-white font-semibold text-xl ms-3'>
              Patient’s Cholesterol Level:
            </label>
            <div className='flex w-full gap-2'>
              <input type='text' className='bg-white h-10 rounded-md w-full' />
              <div className='bg-[#15545A] text-white px-6 flex items-end pb-2  text-xs rounded-md'>
                <span>mg/dL</span>
              </div>
            </div>
          </div>
          <div className=' col-span-5 flex flex-col'>
            <label className=' text-white font-semibold text-xl ms-3'>
              Have history of stroke?
            </label>

            <select className='bg-white h-10 rounded-md'>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
          </div>
          <div className=' col-span-5 flex flex-col'>
            <label className=' text-white font-semibold text-xl ms-3'>
              Alcohol consumption status:
            </label>

            <select className='bg-white h-10 rounded-md'>
              <option value='Drinker'>Drinker</option>
              <option value='Non-Drinker'>Non-Drinker</option>
            </select>
          </div>
          <div className=' col-span-2 flex flex-col'>
            <label className=' text-white font-semibold text-xl ms-3'>
              Smoker?
            </label>

            <select className='bg-white h-10 rounded-md'>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
          </div>
          <div className=' col-span-5 flex flex-col'>
            <label className=' text-white font-semibold text-xl ms-3'>
              Engage Physical Activities?
            </label>

            <select className='bg-white h-10 rounded-md'>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
          </div>
          <div className=' col-span-12 flex justify-center mt-10'>
            <button className='w-auto border-4 border-white text-white hover:bg-[#239a98] text-xl py-2 bg-[#042B2F] rounded-full font-semibold px-8'>
              Run Results
            </button>
          </div>
        </form>
      </div>
      <div className=' bg-[#00717A] rounded-md px-[3rem] py-8'>
        <span className='text-white font-bold text-2xl'>Results</span>
        <hr className=' bg-white h-[.10rem] my-4' />
        <span className='text-white font-[400] text-xl'>
          The patient has a risk percentage of 10% of Ischemic Heart Disease{' '}
        </span>
        <div className='px-[4rem]'>
          <div className=' relative border-2 border-white text-center py-2 rounded-md text-white bg-[#B7F9FF] font-semibold text-2xl'>
            <span className=' text-white bg-[#B7F9FF] font-bold text-2xl'>
              10%
            </span>

            <div
              style={{ width: '10%' }}
              className='bg-[#003034] absolute top-0 bottom-0 rounded-md '
            >
              &nbsp;
            </div>
          </div>
        </div>
      </div>
      <div className=' flex justify-end gap-3'>
        <button className=' bg-[#00717A] rounded-md text-white font-semibold px-6 py-2 text-xl hover:bg-[#239a98]'>
          Save
        </button>
        <button className=' bg-[#00717A] rounded-md text-white font-semibold px-6 py-2 text-xl hover:bg-[#239a98]'>
          Enter New Data
        </button>
      </div>
    </div>
  )
}

export default PredictionForm
