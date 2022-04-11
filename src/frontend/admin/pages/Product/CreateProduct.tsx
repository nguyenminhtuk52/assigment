import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ProductType } from '../../../types/Product'
import { useNavigate } from 'react-router-dom'
type CreateProductProps = {
  onAdd: (product: ProductType) => void,
  categorys: CategoryType
}
type formInput = {
  name: string,
  price: number,
  description: string,
  image: string
}
const CreateProduct = (props: CreateProductProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<formInput>();
  const navitage = useNavigate();
  const onSubmit: SubmitHandler<formInput> = (data: ProductType) => {
    console.log(data);
    props.onAdd(data)
    navitage("/admin/product")
  }
  return (
    <div>
      <Form action='' onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '1200px', margin: 'auto' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h4>Thêm Mới Sản Phẩm</h4></Form.Label>
          <Form.Select aria-label="Default select example">
            {props.categorys?.map((item, index) => {
              return <option {...register('cateId')} value={item._id}>{item.name}</option>
            })};
          </Form.Select>
          <br />
          <Form.Group>
            <Form.Label>Nhập Tên Sản Phẩm</Form.Label>
            <Form.Control type="text" {...register('name', { required: true })} />
            {errors.name && errors.name.type === "required" && <span className="validate">Tên sản phẩm không được để trống</span>}
            <br />
            <br />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nhập Giá Sản Phẩm</Form.Label>
            <Form.Control type="number" {...register('price', { required: true })} />
            {errors.name && errors.name.type === "required" && <span className="validate">Giá sản phẩm không được để trống</span>}
            <br />
            <br />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nhập Ảnh Sản Phẩm</Form.Label>
            <Form.Control type="text"  {...register('image', { required: true, minLength: 6 })} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Nhập Mô Tả Sản Phẩm</Form.Label>
            <Form.Control as="textarea" rows={3} {...register('description', { required: true })} />
            {errors.name && errors.name.type === "required" && <span className="validate">Mô Tả không được để trống</span>}
            <br />
            <br />
          </Form.Group>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default CreateProduct