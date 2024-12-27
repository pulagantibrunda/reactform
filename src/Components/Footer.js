import React from 'react';
import image from "../logo.png"
import './Footer.css'


function Footer() {
  return (
    <>
      <div className="footer">
   <div class="row">
    <div class="col">
    <img src={image} alt="Logo"/>
     63,1st Floor, 16th Main, 8th Cross, BTM 1st Stage, BTM Layout, Bengaluru, Karnataka 560029.
    </div>
    <div class="col">
      <h6>Quick Links</h6>
      <a class="text" href="#">About</a>
      <a class="text" href="#">Offers and Discounts</a>
      <a class="text" href="#">Get Coupon</a>
      <a class="text" href="#">Contact Us</a>
    </div>
    <div class="col">
      <h6>Support</h6>
      <a class="text" href="#">Frequently Asked Questions</a>
      <a class="text" href="#">Terms & Conditions</a>
      <a class="text" href="#">Privacy Policy</a>
      <a class="text" href="#">Report a Payment Issue</a>
    </div>
    <div class="col">
      <h6>Products</h6>
      <a class="text" href="#">Electronics</a>
      <a class="text" href="#">Home Appliances</a>
      <a class="text" href="#">Fashion</a>
      <a class="text" href="#">Beauty & Personal Care</a>
      <a class="text" href="#">Books</a>
    </div>
  </div>
</div>


    </>
  )
}

export default Footer;