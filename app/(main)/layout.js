import React from 'react'
import Dashboardprovider from './provider'

function Dashboardlayout({children}) {
  return (
    <div>
      <Dashboardprovider>
        {children}
      </Dashboardprovider>
    </div>
  )
}

export default Dashboardlayout
