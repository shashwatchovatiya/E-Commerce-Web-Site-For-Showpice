// import React from 'react'

import AditionalInformation from "../Shop/AditionalInformation"
import Heading from "../Shop/Heading"
import EmailValidation from "./EmailValidation"

function Contact() {
  return (
    <div>
      {/* Heding */}
      <Heading />

      {/* Email  */}
      <EmailValidation />

      {/* AditionInformation */}
      <AditionalInformation />
    </div>
  )
}

export default Contact