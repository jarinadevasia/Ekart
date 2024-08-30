import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer)
  console.log("====cart array=====");
  console.log(cartArray);

  const dispatch = useDispatch();

  const [total, setTotal] = useState(0)
  const getTotal = () => {
    let sum = 0;
    cartArray.forEach((item) => {
      sum = sum + item.price;
    })
    setTotal(sum)
  }
  useEffect(() => {
    getTotal();
  }, [cartArray])

  // hook used to navigate to particular path or page
  const navigate = useNavigate();
  const handleCart = () => {
    alert("Thank you ... your order placed successfully");
    dispatch(emptyCart())
    navigate('/')
  }
  return (
    <>
      <div style={{ marginTop: '100px' }}>
        {
          cartArray?.length > 0 ?
            <div className='row w-100'>
              <div className='col-lg-6 m-5'>
                <table className='table shadow border'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product title</th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartArray?.map((item, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.title.slice(0, 20)}...</td>
                          <td><img src={item.image} alt="" height='60px' width='60px' /></td>
                          <td>₹{item.price}</td>
                          <td><Button variant='outline-danger' onClick={() => dispatch(removeFromCart(item.id))}><i class="fa-solid fa-trash"></i></Button></td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>
              </div>
              <div className='col-lg-4'>
                <div className='border shadow p-5'>
                  <h3 className='text-primary'>Cart Summary</h3>
                  <h5>Total Number Of Products: <span className='text-warning fw-bolder'>{cartArray?.length}</span></h5>
                  <h5>Total Price: <span className='text-warning fw-bolder'>₹{total}</span></h5>
                  <button className='btn btn-success rounded w-100' onClick={handleCart}>CHECK OUT</button>
                </div>
              </div>
            </div>
            :
            <div style={{ height: '100vh' }} className='d-flex  align-items-center flex-column'>
              <img src="https://i.pinimg.com/736x/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.jpg" alt="" height='300px' />
              {/* <h3 className='text-danger fw-bolder mt-2'>Your Wishlist Is Empty </h3> */}
            </div>
        }

      </div>
    </>
  )
}

export default Cart;