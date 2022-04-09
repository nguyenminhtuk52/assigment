import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, CloseButton, Table } from 'react-bootstrap'
import { list } from '../../../api/products'

type Props = {}

const product = (props: Props) => {
  const [product,setProduct]=useState([])
  useEffect(()=>{
    const getProduct= async ()=>{
      const {data} = await list();
    }
  })
  return (
    <div>
      <Table striped bordered hover className='table'>
  <thead>
    <tr>
      <th>ID</th>
      <th>Tên</th>
      <th>Giá</th>
      <th>Ảnh</th>
      <th>Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td><Button className='sua' variant="warning">Sửa</Button>{' '}
      <CloseButton className='xoa' aria-label="Hide" />
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    </div>
  )
}

export default product