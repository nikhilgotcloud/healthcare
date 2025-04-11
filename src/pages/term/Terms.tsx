import React from 'react'
import Contacthero from '../../components/contacthero/Contacthero'
import AppointmentForm from '../../components/contactsection/AppointmentForm'
import Tandc from '../../components/term/Tandc'

const Terms = () => {
  return (
    <div>
         <div className="mb-3"><Contacthero/></div>
         <Tandc/>
         <AppointmentForm/>
    </div>
  )
}

export default Terms