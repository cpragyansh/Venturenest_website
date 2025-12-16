import React from 'react'
import './Council.css'
import Advisory from './Advisory'
import LegalCompl from './legalCompl'
import Mentorship from './mentorship'
import Techinnov from './techinnov'
import InvestandFund from './investandFund'
export default function Page () {
  return (
    <div>

<div className="main-council-block-container">
     
    
    
    
     <Advisory />
    <Techinnov />
    <LegalCompl />
    <Mentorship />
  <InvestandFund/>
    
</div>

    </div>
  )
}
