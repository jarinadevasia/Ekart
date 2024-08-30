import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Wishlist() {
  const wishlistItem = useSelector((state) => state.wishlistReducer)
  console.log("=====wishlist item in wishlist page=======");
  console.log(wishlistItem);
  const dispatch = useDispatch();

  const handleWishlist = (item) => {
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }
  return (
    <>
      <button className='btn btn-success mb-4 ms-4 mt-4' >
        <Link to={'/'} style={{ textDecoration: "none", color: '#fff' }}>
          <i class="fa-solid fa-arrow-left-long me-2"></i>
          Back to Home
        </Link>
      </button>
      <Row className='m-5'>
        {
          wishlistItem?.length > 0 ?
            wishlistItem.map((item) => (
              <Col sm={12} md={6} lg={4} xl={3} className='mb-3'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.image} height={'250'} />
                  <Card.Body>
                    <Card.Title>{item.title.slice(0, 20)}...</Card.Title>
                    <Card.Text>
                      <p>{item.description.slice(0, 50)}...</p>
                      <p className='fw-bolder'>Price: &#x20B9;{item.price}</p>
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button variant="outline-danger" onClick={() => dispatch(removeFromWishlist(item.id))}><i class="fa-solid fa-trash" ></i></Button>
                      <Button variant='outline-success' onClick={() => handleWishlist(item)}><i class="fa-solid fa-cart-shopping"></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )) :
            <div style={{ height: '100vh' }} className='d-flex  align-items-center flex-column'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLSz1SYhpDvBfqDubCPfMflLOfO9rk87MNhw&s" alt="" height='300px' />
              {/* <h3 className='text-danger fw-bolder mt-2'>Your Wishlist Is Empty </h3> */}
            </div>
        }
      </Row>
    </>
  )
}

export default Wishlist;