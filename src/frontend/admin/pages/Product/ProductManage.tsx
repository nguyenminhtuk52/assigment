import axios from 'axios'
import React, { Props, useEffect, useState } from 'react'
import { Button, CloseButton, Table } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { list } from '../../../api/products'
import { ProductType } from '../../../types/Product'

type ProductManage = {
  products: ProductType,
  onRemove: (_id: number) => void
}
const product = (props: ProductManage) => {
  return (
    <div>
      <NavLink to='create'><Button style={{margin:'5px 0px 0px 200px'}} className='' variant="outline-primary">Thêm Mới Sản Phẩm</Button></NavLink>
      <Table striped bordered hover className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Ảnh</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {props.products?.map((item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><img width={'50px'} src={item.image} alt="" /></td>
              <td>
                <Button variant="outline-warning">Sửa</Button>
                <Button style={{marginLeft:'10px'}} onClick={() => props.onRemove(item._id)} variant="outline-danger">Xóa</Button>
              </td>
            </tr>
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default product