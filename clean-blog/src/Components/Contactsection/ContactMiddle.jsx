import React from 'react'
import "./ContactMiddle.scss"
function ContactMiddle() {
  return (
   <>
    <section class="middle_Contact">
            <p class="middle_Contact_p">Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email Address"></input>
            <input type="text" placeholder="Phone Number"></input>
            <textarea name="" id="" cols= "90" rows="" placeholder="Message"></textarea>
            <div className='middle_contact_div_btn' >
            <button className='middle_contact_btn'>Send</button>
            </div>
        </section>
   </>
  )
}

export default ContactMiddle