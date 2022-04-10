import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import {useForm,SubmitHandler} from 'react-hook-form'
import { ProductType } from '../../../types/Product'
import {useNavigate} from 'react-router-dom'
type CreateProductProps = {
  onAdd:(product:ProductType)=>void,
}
type formInput={
  name:string,
  price:number,
  description:string,
  image:string
}
const CreateProduct = (props: CreateProductProps) => {
  const {register,handleSubmit,formState:{errors}}=useForm<formInput>();
  const navitage=useNavigate();
  const onSubmit:SubmitHandler<formInput> =(data:ProductType)=>{
    console.log(data);
    props.onAdd(data)
    navitage("/admin/product")
    
  }
  return (
    <div>
      <Form action='' onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '1200px', margin: 'auto' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h4>Thêm Mới Sản Phẩm</h4></Form.Label>
          <Form.Group>
            <Form.Label>Nhập Tên Sản Phẩm</Form.Label>
            <Form.Control type="text" {...register('name')} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nhập Giá Sản Phẩm</Form.Label>
            <Form.Control type="number" {...register('price')}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Nhập Ảnh Sản Phẩm</Form.Label>
            <Form.Control type="text" {...register('image')}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Nhập Mô Tả Sản Phẩm</Form.Label>
            <Form.Control as="textarea" rows={3} {...register('description')} />
          </Form.Group>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <script>
        
      </script>
    </div>
  )
}

export default CreateProduct