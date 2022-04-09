import React from 'react'
import "../App.css"

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='footer'>
      <div className='footer-1'>
        <h5 style={{margin:'1rem',color:'white'}}>Shop Giầy ABC</h5>
        <p style={{margin:'1rem',color:'white'}}>Số điện thoại:0999999</p>
        <p style={{margin:'1rem',color:'white'}}>Long An: 488 Hùng Vương, P.3, Tân An</p>
      </div>
      <div className='footer-2'>
        <div className='icon1'>
        <img style={{width:'6rem'}} className='img-logo' src="https://img.icons8.com/color/2x/nike.png" alt="" />
        </div>
        <div className='icon2'>
          <img style={{margin:'1rem'}} className='img-footer' src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-stunning-instagram-logo-vector-download-for-new-7.png" alt="" />
          <img style={{margin:'1rem'}} className='img-footer' src="https://www.freepnglogos.com/uploads/facebook-logo-13.png" alt="" />
          <img style={{margin:'1rem'}} className='img-footer' src="https://www.freepnglogos.com/uploads/tik-tok-logo-png/tik-tok-tiktok-logo-app-trend-1.png" alt="" />
        </div>
      </div>
      <div className='footer-3'>
      <iframe className='hii' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1649233215157!5m2!1svi!2s" width="400" height="200" style={{border:'0'}}  loading="lazy"></iframe>
      </div>
    </div>
  )
}

export default Footer