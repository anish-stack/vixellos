import React from 'react'
import './conatc.css'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
const Contacts = () => {
  return (
    <>
  <Breadcrumbs title={'Contact - Us'} />
    <div class="containers mt-5">
    <div class="content">
      <div class="left-side">
       
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+91 7065846975</div>
          {/* <div class="text-two">+0096 3434 5678</div> */}
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">Support@befikarshopping.store</div>
          <div class="text-two">info@befikarshopping.store</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box message-box">
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="button">
          <input type="button" value="Send Now"/ >
        </div>
      </form>
    </div>
    </div>
  </div>

  </>
  )
}

export default Contacts