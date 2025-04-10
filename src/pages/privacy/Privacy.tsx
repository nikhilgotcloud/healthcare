import React from 'react'
import Contacthero from '../../components/contacthero/Contacthero'
import AppointmentForm from '../../components/contactsection/AppointmentForm'
import PrivacyPolicy from '../../components/privacy/PrivacyPolicy'

const Privacy = () => {
  return (
    <div>
        <div className="mb-3"><Contacthero/></div>
        <PrivacyPolicy/>
        <AppointmentForm/>
        
    </div>
  )
}

export default Privacy