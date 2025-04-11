import React from 'react'
import Contacthero from '../../components/contacthero/Contacthero'
import AppointmentForm from '../../components/contactsection/AppointmentForm'
import CookiesPolicy from '../../components/cookie/CookiesPolicy'

const Cookie = () => {
  return (
    <div>
         <div className="mb-3"><Contacthero/></div>
         <CookiesPolicy/>
         <AppointmentForm/>
    </div>
  )
}

export default Cookie