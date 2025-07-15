import React from 'react'
import Dashboardprovider from './provider'

function Dashboardlayout({children}) {
  return (
    <div>
      <div className='bg-secondary'>
        <Dashboardprovider>
          <div className='p-10'>
            {children}
          </div>
        
      </Dashboardprovider>
      </div>    
    </div>
  )
}

export default Dashboardlayout
