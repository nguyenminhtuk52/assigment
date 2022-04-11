import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../../../api/products'
import { CategoryType } from '../../../types/category';
import { ProductType } from '../../../types/Product'

type UpdateProductProps = {
  categorys: CategoryType,
  onUpdate: (product: ProductType) => void
}
type FormInputs = {
  name: string,
  price: number,
  description: string,
  image: string
}
const UpdateProduct = (props: UpdateProductProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const navigate = useNavigate();
  const { _id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(_id);
      reset(data);
    }
    getProduct();
  }, [])
  const onSubmit: SubmitHandler<FormInputs> = data => {
    props.onUpdate(data);
    navigate("/admin/product");
  }
  return (
    <div>
      <Form action='' onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '1200px', margin: 'auto' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h4>Cập Nhật Sản Phẩm</h4></Form.Label>
          {/* <Form.Select aria-label="Default select example">
            {props.categorys?.map((item, index) => {
              return <option {...register('cateId')} value={item._id}>{item.name}</option>
            })};
          </Form.Select> */}
          <Form.Group>
            <Form.Label>Nhập Tên Sản Phẩm</Form.Label>
            <Form.Control type="text" {...register('name', { required: true })} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nhập Giá Sản Phẩm</Form.Label>
            <Form.Control type="number"  {...register('price')} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nhập Ảnh Sản Phẩm</Form.Label>
            <Form.Control type="text"  {...register('image')} />
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
    </div>
  )
}
export default UpdateProduct