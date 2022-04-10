import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../main.css'

type Props = {}

const dashboard = (props: Props) => {
  return (
    <div>
      <Carousel className='slidee'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://avepointcom.azureedge.net/blog/wp-content/uploads/2021/10/system-administrator-software-developer-working-on-laptop-computer-in-vector-id1296795051.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://avepointcom.azureedge.net/blog/wp-content/uploads/2021/10/system-administrator-software-developer-working-on-laptop-computer-in-vector-id1296795051.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://avepointcom.azureedge.net/blog/wp-content/uploads/2021/10/system-administrator-software-developer-working-on-laptop-computer-in-vector-id1296795051.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default dashboard