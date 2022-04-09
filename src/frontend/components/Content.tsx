import React from 'react'
import { Button, Card } from 'react-bootstrap'

type Props = {}

const Content = (props: Props) => {
  return (
    <div className='content'>
      <h3 className='h3-content'>Sản Phẩm Bán Chạy</h3>
      <div className='content-2-2'>
      <Card style={{ width: '18rem', height: '22rem' }}>
          <Card.Img style={{ height: '17rem' }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJyTIBgJfFL7dCFZGffYzzVc67-XNTz6C8A&usqp=CAU" />
          <Card.Body>
            <Card.Text className='text-content' style={{display:'flex'}}>
              <Card.Text>
                Giầy Converse
              </Card.Text>
              <Card.Text className='text-price'>
                20$
              </Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', height: '22rem' }}>
          <Card.Img style={{ height: '17rem' }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJyTIBgJfFL7dCFZGffYzzVc67-XNTz6C8A&usqp=CAU" />
          <Card.Body>
            <Card.Text className='text-content' style={{display:'flex'}}>
              <Card.Text>
                Giầy Converse
              </Card.Text>
              <Card.Text className='text-price'>
                20$
              </Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', height: '22rem' }}>
          <Card.Img style={{ height: '17rem' }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJyTIBgJfFL7dCFZGffYzzVc67-XNTz6C8A&usqp=CAU" />
          <Card.Body>
            <Card.Text className='text-content' style={{display:'flex'}}>
              <Card.Text>
                Giầy Converse
              </Card.Text>
              <Card.Text className='text-price'>
                20$
              </Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', height: '22rem' }}>
          <Card.Img style={{ height: '17rem' }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJyTIBgJfFL7dCFZGffYzzVc67-XNTz6C8A&usqp=CAU" />
          <Card.Body>
            <Card.Text className='text-content' style={{display:'flex'}}>
              <Card.Text>
                Giầy Converse
              </Card.Text>
              <Card.Text className='text-price'>
                20$
              </Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='content-2'>
        <h3 className='h3-content'>Sản Phẩm Yêu Thích</h3>
        <div className='content-2-2'>
        <Card style={{ width: '18rem', height: '22rem' }}>
          <Card.Img style={{ height: '17rem' }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJyTIBgJfFL7dCFZGffYzzVc67-XNTz6C8A&usqp=CAU" />
          <Card.Body>
            <Card.Text className='text-content' style={{display:'flex'}}>
              <Card.Text>
                Giầy Converse
              </Card.Text>
              <Card.Text className='text-price'>
                20$
              </Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', height: '22rem' }}>
          <Card.Img style={{ height: '17rem' }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJyTIBgJfFL7dCFZGffYzzVc67-XNTz6C8A&usqp=CAU" />
          <Card.Body>
            <Card.Text className='text-content' style={{display:'flex'}}>
              <Card.Text>
                Giầy Converse
              </Card.Text>
              <Card.Text className='text-price'>
                20$
              </Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', height: '22rem' }}>
          <Card.Img style={{ height: '17rem' }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJyTIBgJfFL7dCFZGffYzzVc67-XNTz6C8A&usqp=CAU" />
          <Card.Body>
            <Card.Text className='text-content' style={{display:'flex'}}>
              <Card.Text>
                Giầy Converse
              </Card.Text>
              <Card.Text className='text-price'>
                20$
              </Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', height: '22rem' }}>
          <Card.Img style={{ height: '17rem' }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJyTIBgJfFL7dCFZGffYzzVc67-XNTz6C8A&usqp=CAU" />
          <Card.Body>
            <Card.Text className='text-content' style={{display:'flex'}}>
              <Card.Text>
                Giầy Converse
              </Card.Text>
              <Card.Text className='text-price'>
                20$
              </Card.Text>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
  )
}

export default Content