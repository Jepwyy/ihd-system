import React, { useState } from 'react'
import NavigationBar from '../components/Navbar'
import PredictionForm from '../components/form/PredictionForm'
import PredictionTable from '../components/table/PredictionTable'

function Prediction() {
  const [tab, setTab] = useState('prediction')
  return (
    <div className='app flex flex-col'>
      <NavigationBar setTab={setTab} tab={tab} />
      {tab === 'prediction' ? (
        <PredictionForm />
      ) : tab === 'history' ? (
        <PredictionTable />
      ) : null}
    </div>
  )
}

export default Prediction
