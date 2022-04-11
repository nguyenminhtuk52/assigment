import React from 'react'
import { Badge, Card, FloatingLabel, Form, ListGroup, Pagination } from 'react-bootstrap'
import '../App.css'
type Props = {
  products: ProductType,
}

const Product = (props: Props) => {
  return (
    <div className='product'>
      <div className='product1'>
        <div className='danhmuc' style={{ width: '350px' }}>
          <ListGroup as="ol" numbered>
            <ListGroup.Item action href="#link1">
              Danh Mục
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Giầy Nike</div>
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Giầy Converse</div>
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Giầy Adidas</div>
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div style={{ marginTop: '30px' }}>
          <>
            <Form.Label>Tìm Theo Giá Sản Phẩm</Form.Label>
            <Form.Range style={{ width: '330px', marginTop: '20px' }} />
          </>
        </div>
        <div className="search" style={{ width: '330px', display: 'flex', marginTop: '30px' }}>
          <>
            <FloatingLabel style={{ width: '20rem' }}
              controlId="floatingInput"
              label="Tìm Kiếm Sản Phẩm"
              className="mb-3">
              <Form.Control style={{ borderRadius: '30px' }} type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <button className='abcc'><span><img style={{width:'40px'}} className='img-search' src="https://img.icons8.com/external-line-gradient-kendis-lasman/344/external-search-graphic-design-line-gradient-line-gradient-kendis-lasman.png" alt="" /></span></button>
          </>
        </div>
      </div>
      <div className='product2'>
        <h2 style={{ margin: 'auto', textAlign: 'center' }}>Tất Cả Sản Phẩm</h2>
        <div className='content1'>
          {props.products?.map((item, index) => {
            return <Card key={index} style={{ width: '18rem', height: '22rem' }}>
              <Card.Img style={{ height: '17rem' }} variant="top" src={item.image} />
              <Card.Body>
                <Card.Text className='text-content' style={{ display: 'flex' }}>
                  <Card.Text>
                  {item.name}
                  </Card.Text>
                  <Card.Text className='text-price'>
                  {item.price}$
                  </Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          })}
        </div>
        <Pagination style={{ marginLeft: '150px', marginTop: '30px' }}>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  )
}

export default Product