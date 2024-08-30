import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div style={{ width: "100%", height: '300px' }} className='d-flex justify-content-center align-items-center flex-column mt-5 bg-primary '>
        <div className='d-flex justify-content-evenly align-items-center mb-5 w-100' style={{ color: '#fff' }}>
          <div style={{ width: '400px', color: '#fff' }}>
            <h4><i class="fa-solid fa-cart-shopping fa-bounce me-3" style={{ color: "white" }}></i>E-kart</h4>
            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptatum perspiciatis, quisquam veritatis commodi quidem repellat quasi expedita, suscipit porro necessitatibus veniam vero beatae unde doloribus quaerat perferendis tenetur aut!</h6>
          </div>
          <div className='d-flex flex-column'>
            <h4>Links</h4>
            <Link to={'/'} style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
            <Link to={'/cart'} style={{ color: 'white', textDecoration: 'none' }}>Cart</Link>
            <Link to={'/wishlist'} style={{ color: 'white', textDecoration: 'none' }}>Wishlist</Link>
          </div>
          <div className='d-flex flex-column'>
            <h4>Guides</h4>
            <Link to={'https://react.dev/'} style={{ color: 'white', textDecoration: 'none' }} target='_blank'>React</Link>
            <Link to={'https://react.dev/'} style={{ color: 'white', textDecoration: 'none' }} target='_blank'></Link>
            <Link to={'https://react.dev/'} style={{ color: 'white', textDecoration: 'none' }} target='_blank'></Link>
          </div>
          <div>
            <h4>Contact</h4>
            <div className='d-flex'>
              <input type="text" className='form-control' placeholder='enter your email id' />
              <button className='btn btn-warning ms-2'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly ms-3 mt-3'>
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                onMouseEnter={(e) => e.currentTarget.querySelector('i').classList.add('fa-spin')}
                onMouseLeave={(e) => e.currentTarget.querySelector('i').classList.remove('fa-spin')}
              >
                <i class="fa-brands fa-square-instagram fa-2x"></i>
              </Link>
              <Link style={{ color: 'white', textDecoration: 'none' }}
                onMouseEnter={(e) => e.currentTarget.querySelector('i').classList.add('fa-spin')}
                onMouseLeave={(e) => e.currentTarget.querySelector('i').classList.remove('fa-spin')}
              >
                <i class="fa-brands fa-square-facebook fa-2x"></i>
              </Link>
              <Link style={{ color: 'white', textDecoration: 'none' }}
                onMouseEnter={(e) => e.currentTarget.querySelector('i').classList.add('fa-spin')}
                onMouseLeave={(e) => e.currentTarget.querySelector('i').classList.remove('fa-spin')}
              >
                <i class="fa-brands fa-square-github fa-2x"></i>
              </Link>
              <Link style={{ color: 'white', textDecoration: 'none' }}
                onMouseEnter={(e) => e.currentTarget.querySelector('i').classList.add('fa-spin')}
                onMouseLeave={(e) => e.currentTarget.querySelector('i').classList.remove('fa-spin')}
              >
                <i class="fa-brands fa-linkedin fa-2x"></i>
              </Link>
            </div>
          </div>
        </div>
        <p style={{ color: 'white' }}>Copyright  &copy; 2024 E-Kart build with React Redux</p>
      </div>
    </>
  )
}

export default Footer