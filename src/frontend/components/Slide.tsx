import React from 'react'
import { Carousel } from 'react-bootstrap'
import "../App.css"
type Props = {}

const Slide = (props: Props) => {
  return (
    <div className='slide'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block-w-100"
            src="https://ananas.vn/wp-content/uploads/kv_basas_mobileBanner_4_2019.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Thế Giới Giầy</h3>
            <p>GIAO HÀNG TOÀN QUỐC,THANH TOÁN KHI NHẬN HÀNG,BẢO HÀNH DÀI HẠN,ĐỔI HÀNG DỄ DÀNG</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block-w-100"
            src="https://ananas.vn/wp-content/uploads/kv_basas_mobileBanner_4_2019.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Thế Giới Giầy</h3>
            <p>GIAO HÀNG TOÀN QUỐC,THANH TOÁN KHI NHẬN HÀNG,BẢO HÀNH DÀI HẠN,ĐỔI HÀNG DỄ DÀNG</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block-w-100"
            src="https://ananas.vn/wp-content/uploads/kv_basas_mobileBanner_4_2019.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Thế Giới Giầy</h3>
            <p>GIAO HÀNG TOÀN QUỐC,THANH TOÁN KHI NHẬN HÀNG,BẢO HÀNH DÀI HẠN,ĐỔI HÀNG DỄ DÀNG</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slide