import React from 'react'
import './reply-style.css'

const Reply = () => {
   return (
      <div className='container py-3 mb-4'>
         <div className="row">
            <div className="col-lg-9 section-reply p-3">
               <h3 className="reply-title mt-2 ms-2">Leave a Reply</h3>
               <p className='ms-2'>Your email address will not be published. Required fields are marked *</p>

               <form className="w-100 d-block" id="appointmentForm">
                  <div className="appoint_form_box">
                     <div className="row p-0 m-0">
                        <div className="col-md-12 input_box mb-2">
                           <textarea className="form-control input" id="message"> Comment</textarea>

                        </div>
                        <div className="col-md-6  input_box mb-2">
                           <input type="text" className="form-control input" id="firstName"
                              placeholder="First Name" required />
                        </div>
                        <div className="col-md-6 input_box mb-2">
                           <input type="email" className="form-control input" id="email"
                              placeholder="Email" required />
                        </div>


                        <div className="col-md-12 input_box">
                           <input type="text" className="form-control input" id="website"
                              placeholder="Website" required />
                        </div>

                        <div className="col-md-12 input_box">
                           <div className="g-recaptcha"
                              data-sitekey="6LfwvZcqAAAAAMGyPVAK9I7Lzd6is46YGys2gyJV"
                              data-callback="onRecaptchaSuccess">
                           </div>
                        </div>
                        <div className="col-12  mt-1 mb-4 check_main">
                           <input type="checkbox" className="form-check-input ms-2 border-1 border-dark" id="saveInfo" />
                           <label className="form-check-label ms-2" htmlFor="saveInfo">Save my name, email, and website in this browser for the next time I comment.</label>
                        </div>
                        <div className="col-md-12  btn_box">
                           <button className="make_appoint_btn mb-2">

                              Post Comment <img src="image/iconArrow.svg" alt="" loading="lazy" />
                           </button>

                        </div>


                     </div>

                  </div>
               </form>
            </div>
         </div>

      </div>
   )
}

export default Reply